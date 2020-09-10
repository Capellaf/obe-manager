const db = require('../database/db');
const bcrypt = require('bcrypt');

const newUser = (object, res) => {
    db.query("SELECT * FROM user WHERE username = ?", [object.username],(err, results) => {
        if (err) {
            return res.status(500).send({error: err})
        }
        if (results.length > 0) {
            res.status(409).send({ message: "Usuário já cadastrado!"} )
        } else {
            bcrypt.hash (object.pass, 10, (errBcrypt, hash) => {
                if(errBcrypt) {
                    return res.status(500).send({error: errBcrypt})
                }
                db.query("INSERT INTO user (username, pass) VALUES (?, ?)",
            [
                object.username,
                hash 
            ],(err) => {
                if(err) {
                    return res.status(400).send()
                }
                return res.status(201).send({
                    message: 'Usuário criado com sucesso!',
                    userCriado: object.username
                })
            })
            })
        }
    })   
}

module.exports = newUser;