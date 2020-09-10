const db = require('../database/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = (object, res) => {
    db.query("SELECT * FROM user WHERE username=?",
    [
        object.username
    ],(err, values) => {
        if(err) {
            return res.status(500).send({error: err})
        }
        if(values.length <1 || values == undefined) {
            return res.status(401).json({message: "Dados inválidos!"})
        }
        bcrypt.compare(object.pass, values[0].pass, (err, result) => {
            if (err) {
                return res.status(401).send({message: "Dados inválidos!"})
            }
            if (result) {
                const token = jwt.sign({
                    id_user: values[0].id,
                    username: values[0].username
                }, process.env.JWT_KEY, 
                {
                    expiresIn : "1d"
                })
                return res.status(200).json({token: token})
            }
            return res.status(401).json({message: "Falha na autenticação!"}) 
        })
    })
}

module.exports = login;