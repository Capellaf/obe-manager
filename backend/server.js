const express = require('express');
const bodyParser = require('body-parser');

const auth = require('./middleware/login');
const login = require('./controllers/login');
const newUser = require('./controllers/newUser');
const delAluno = require('./controllers/delAluno');
const delProf = require('./controllers/delProf');
const listaAlunos = require('./controllers/listaAlunos');
const listaProfessores = require('./controllers/listaProfessores');
const listaTurmas = require('./controllers/listaTurmas');
const newProf = require('./controllers/newProf');
const newAluno = require('./controllers/newAluno');
const newTurma = require('./controllers/newTurma');

const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const port = process.env.PORT || 5000;

app.post('/obeapi/login', (req, res) => {
    return login(req.body,res)
})

app.delete('/obeapi/delAluno', auth, (req, res) => {
    return delAluno(req.body,res)
})

app.delete('/obeapi/delProf', auth, (req, res) => {
    return delProf(req.body,res)
})

app.get('/obeapi/listaAlunos/:nome?', (req, res) => {
    return listaAlunos(req.params,res)
})

app.get('/obeapi/listaProf/:nome?', (req, res) => {
    return listaProfessores(req.params,res)
})

app.get('/obeapi/listaTurmas/:nome?', (req, res) => {
    return listaTurmas(req.params,res)
})

app.post('/obeapi/newProf', auth, (req, res) => {
    return newProf(req.body,res)
})

app.post('/obeapi/newAluno', (req, res) => {
    return newAluno(req.body,res)
})

app.post('/obeapi/newTurma', (req, res) => {
    return newTurma(req.body,res)
})

app.post('/obeapi/newUser', auth, (req, res) => {
    return newUser(req.body,res)
})

app.listen(port, () => console.log(`Listening on port ${port}`));