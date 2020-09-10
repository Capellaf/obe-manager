const db = require('../database/db');

const delProf = (object, res) => {
    db.query("DELETE FROM professor WHERE idProfessor = ?", [object.id], (err) => {
    if (err) {
      return res.status(400).send();
    }
    return res.status(200).send();
  })
}

module.exports = delProf;