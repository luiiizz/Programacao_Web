// Importando e usando express
const express = require('express');
const app = express();

const PacienteController = require('./app/controllers/PacienteController');
const pacienteController = new PacienteController();


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome');
});

// Rotas para Pacientes
app.get('/pacientes', (req, res) => pacienteController.listarPacientes(req, res));
app.get('/pacientes/:id', (req, res) => pacienteController.paciente(req, res));
app.post('/pacientes', (req, res) => pacienteController.criarPaciente(req, res));
app.put('/pacientes/:id', (req, res) => pacienteController.atualizar(req, res));
app.delete('/pacientes/:id', (req, res) => pacienteController.deletar(req, res));



app.listen(3030, (req, res) => {
    console.log('listening on port 3030');
});