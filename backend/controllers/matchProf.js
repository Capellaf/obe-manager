const db = require('../database/db');

const matchProf = (object, res) => {
  object = object.agenda
  object = object.split(',')
  let filter = 'AND !INSTR('+object[0]+', "'+object[2]+'") AND !INSTR('+object[1]+', "'+object[3]+'");'
  db.query('SELECT agendaProf.idProfessor, professor.nome FROM agendaProf, professor WHERE professor.idProfessor = agendaProf.idProfessor AND INSTR(professor.daysOn, ?) AND INSTR(professor.daysOn, ?) AND INSTR(professor.persOn, ? )'+filter, [object[0], object[1], object[4]], (err, rows) => {
  if (err) {
    return res.status(400).send()
  }
  res.json(rows);
  })
}

module.exports = matchProf;