const db = require('../database/db');

const listaTurmas = (object, res) => {
  let per = object.per.split(",")
  let filter = '';
  if (per.length < 3) {
    if (per.length === 1) {
      filter = 'WHERE per = "'+per[0]+'"';
    } else {
      filter = 'WHERE per = "'+per[0]+'" OR per = "'+per[1]+'"';
    }
  }
  db.query('SELECT * FROM turma '+filter+';', (err, rows) => {
  if (err) {
    return res.status(400).send()
  }
  res.json(rows);
  })
}

module.exports = listaTurmas;