const db = require('../database/db');

const newAluno = (object, res) => {
    db.query("SELECT * FROM aluno WHERE email = ?", [object.email],(err, results) => {
        if (err) {
            return res.status(500).send({error: err})
        }
        if (results.length > 0) {
            res.status(409).json({ message: "Email já cadastrado!"} )
        } else {
            db.query("INSERT INTO aluno (firstName, lastName, email, telefone, idTurma, dataCadastro, idPlano) VALUES (?,?,?,?,?,?,?)", 
            [
                object.firstName,
                object.lastName,
                object.email,
                object.telefone,
                object.idTurma,
                new Date().toISOString().slice(0, 19).replace('T', ' '),
                object.idPlano
            ], (err) => {
                if (err) {
                    return res.status(400).send("Falha na inserção!")
                }
                return res.status(200).send()
            })
        }   
    })
}

module.exports = newAluno;