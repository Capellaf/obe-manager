const db = require('../database/db');
const bcrypt = require('bcrypt');

const pushAluno = (object, turma, res) => {
    db.query("INSERT INTO aluno (firstName, lastName, cpf, email, telefone, nivel, idTurma, dataCadastro, idPlano) VALUES (?,?,?,?,?,?,?,?,?)", 
    [
        object.firstName,
        object.lastName,
        object.cpf,
        object.email,
        object.telefone,
        object.nivel,
        turma,
        new Date().toISOString().slice(0, 19).replace('T', ' '),
        object.idPlano
    ], (err) => {
        if (err) {
            return res.status(400).send("Falha na inserção de novo aluno")
        }
        return res.status(201).send({
            message: 'Aluno cadastrado com sucesso!',
            turma: turma
        })
    })
}

const newAluno = (object, res) => {
    turma = 0;
    db.query("SELECT * FROM aluno WHERE cpf = ?", [object.cpf],(err, results) => {
        if (err) {
            return res.status(500).send({error: err})
        }
        if (results.length > 0) {
            res.status(409).send({ message: "Cpf já cadastrado!"} )
        } else {
            db.query("SELECT * FROM aluno WHERE email = ?", [object.email],(err, results) => {
                if (err) {
                    return res.status(500).send({error: err})
                }
                if (results.length > 0) {
                    res.status(409).send({ message: "Email já cadastrado!"} )
                } else {
                    db.query("SELECT idTurma FROM turma WHERE nivel = ? AND nAulas < 1 AND nAlunos < 3", [object.nivel], (err, results) => {
                        if (err) {
                            return res.status(500).send({error: err})
                        }
                        if (results.length > 0) {
                            turma = results[0].idTurma
                            db.query("UPDATE turma SET nAlunos = nAlunos + 1 WHERE idturma = ?", [turma], (err) => {
                                if (err){
                                    return res.status(400).send(err)
                                }
                            })
                            return pushAluno(object,turma,res)
                        } else {
                            db.query("INSERT INTO turma (idProfessor, nAulas, nivel, nAlunos) VALUES (?,?,?,?)", [1, 0, object.nivel, 1], (err) => {
                                if (err) {
                                    return res.status(400).send("Não foi possível atribuir uma turma!")
                                }
                                db.query("SELECT idTurma FROM turma WHERE nivel = ? AND nAulas < 1 AND nAlunos < 2", [object.nivel], (err, results) => {
                                    if (err) {
                                        return res.status(500).send({error: err})
                                    } 
                                    turma = results[0].idTurma
                                    return pushAluno(object,turma,res)
                                })
                            })
                        }
                    })
                }
            })
        }   
    })
}

module.exports = newAluno;