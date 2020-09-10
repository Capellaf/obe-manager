const db = require('../database/db');

const newTurma = (object, res) => {
    object = object.data;
    var hr = parseInt(object.horaUm);
    if (hr >= 18 ){
        hr = 'notu';
    } else if (hr >= 13) {
        hr = 'vesp';
    } else {
        hr = 'matu';
    }
    db.query("INSERT INTO turma (diaUm, diaDois, hrUm, hrDois, idProfessor, nomeProfessor, per) VALUES (?,?,?,?,?,?,?)", 
    [
        object.diaUm,
        object.diaDois,
        object.horaUm,
        object.horaDois,
        1,
        'Filipe Capella',
        hr
    ], (err) => {
        if (err) {
            return res.status(400).send("Falha na inserção!")
        }
        return res.status(200).send()
    })
}

module.exports = newTurma;