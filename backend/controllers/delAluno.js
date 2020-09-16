const { json } = require('body-parser');
const db = require('../database/db');

const delAluno = (object, res) => {
  let idTurma = 0;
    db.query('SELECT idTurma FROM aluno WHERE idAluno = ?', [object.id], (err, result) => {
      if (err) {
        return res.status(400).send()
      }
      idTurma = result[0].idTurma;
    })
    db.query("DELETE FROM aluno WHERE idAluno = ?", [object.id], (err) => {
    if (err) {
      return res.status(400).send();
    }
    db.query("UPDATE turma SET nAlunos=nAlunos-1 WHERE idTurma = ?;", [idTurma], (err) => {
      if (err) {
        return res.status(400).send();
      }
    })
    return res.status(200).send();
  })
}

module.exports = delAluno;