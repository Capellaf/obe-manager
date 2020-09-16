const db = require('../database/db');

const newTurma = (object, res) => {
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
        object.idProfessor,
        object.nomeProfessor,
        hr
    ], (err) => {
        if (err) {
            return res.status(400).send()
        }
        db.query('UPDATE agendaprof SET '+object.diaUm+'=CONCAT('+object.diaUm+',?), '+object.diaDois+'=CONCAT('+object.diaDois+',?) WHERE idProfessor = ?', [object.horaUm,object.horaDois,object.idProfessor], (err) => {
            if (err) {
                return res.status(400).send()
            }
            return res.status(200).send()
        })
    })
}

module.exports = newTurma;