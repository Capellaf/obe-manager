const db = require('../database/db');

const listaTurmas = (object, res) => {
  let filter = '';
  if(object.nome) filter = ' WHERE INSTR (nomeProfessor, "'+ object.nome +'")'
  db.query('SELECT * FROM turma' + filter +';', (err, rows) => {
  if (err) {
    return res.status(400).send()
  }
  res.json(rows);
  })
}

module.exports = listaTurmas;