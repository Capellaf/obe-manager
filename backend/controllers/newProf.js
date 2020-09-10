const db = require('../database/db');
const bcrypt = require('bcrypt');

const newProf = (object, res) => {
    object = object.data;
    object.daysOn = object.daysOn.toString();
    object.perOn = object.perOn.toString();
    console.log(object)
    db.query("SELECT * FROM professor WHERE cpf = ?", [object.cpf],(err, results) => {
        if (err) {
            return res.status(500).send({error: err})
        }
        if (results.length > 0) {
            res.status(409).json({ message: "Cpf já cadastrado!"} )
        } else {
            db.query("SELECT * FROM professor WHERE email = ?", [object.email],(err, results) => {
                if (err) {
                    return res.status(500).send({error: err})
                }
                if (results.length > 0) {
                    res.status(409).send({ message: "Email já cadastrado!"} )
                } else {
                    db.query("INSERT INTO professor (firstName, lastName, cpf, email, telefone, dataCadastro, valorHora, nome, daysOn, persOn) VALUES (?,?,?,?,?,?,?,?,?,?)", 
                    [
                        object.firstName,
                        object.lastName,
                        object.cpf,
                        object.email,
                        object.telefone,
                        new Date().toISOString().slice(0, 19).replace('T', ' '),
                        object.valorHora,
                        object.firstName+' '+object.lastName,
                        object.daysOn,
                        object.perOn
                    ], (err) => {
                        if (err) {
                            return res.status(400).send("Falha na inserção!")
                        }
                        return res.status(200).send()
                    })
                }
            })
        }   
    })
}

module.exports = newProf;