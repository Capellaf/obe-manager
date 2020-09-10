const db = require('../database/db');

const delAluno = (object, res) => {
    db.query("DELETE FROM aluno WHERE idAluno = ?", [object.id], (err) => {
    if (err) {
      return res.status(400).send();
    }
    return res.status(200).send();
  })
}

module.exports = delAluno;