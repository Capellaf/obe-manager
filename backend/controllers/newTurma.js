const db = require('../database/db');
const bcrypt = require('bcrypt');

const newTurma = (object, res) => {
    object = object.data;
    db.query("INSERT INTO turma (diaUm, diaDois, hrUm, hrDois, idProfessor, nomeProfessor) VALUES (?,?,?,?,?,?)", 
    [
        object.diaUm,
        object.diaDois,
        object.horaUm,
        object.horaDois,
        1,
        'Filipe Capella'
    ], (err) => {
        if (err) {
            return res.status(400).send("Falha na inserção!")
        }
        return res.status(200).send()
    })
}

module.exports = newTurma;