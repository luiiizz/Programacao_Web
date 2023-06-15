const express = require('express');
const router = express.Router();

// Importando controles
const ControlePassageiros = require('./app/controles/ControlePassageiros');
const controlePassageiros = new ControlePassageiros();
const ControleAeronaves = require('./app/controles/ControleAeronaves');
const controleAeronaves = new ControleAeronaves();
const ControleUsuarios = require('./app/controles/ControleUsuarios');
const controleUsuarios = new ControleUsuarios();


router.get('/', (req,res) => {
    res.send("Bem vindo ao meu servidor");
  })
  
  
  router.get('/api/passageiros', (req, res) => controlePassageiros.todos(req, res));
  router.post('/api/passageiros', (req, res) => controlePassageiros.criar(req, res));
  router.get('/api/passageiros/:id', (req, res) => controlePassageiros.apenasUm(req, res));
  router.put('/api/passageiros/:id', (req, res) => controlePassageiros.atualizar(req, res));
  router.delete('/api/passageiros/:id', (req, res) => controlePassageiros.deletar(req, res));

  
  router.get('/api/aeronaves', (req, res) => controleAeronaves.todos(req, res));
  router.get('/api/aeronaves/:codigo', (req, res) => controleAeronaves.apenasUm(req, res));
  router.post('/api/aeronaves', (req, res) => controleAeronaves.criar(req, res));
  router.put('/api/aeronaves/:codigo', (req, res) => controleAeronaves.atualizar(req, res));
  router.delete('/api/aeronaves/:codigo', (req, res) => controleAeronaves.deletar(req, res));

  router.post('/api/usuarios', (req, res) => controleUsuarios.criar(req, res));
  router.get('/api/usuarios', (req, res) => controleUsuarios.logar(req, res));

  module.exports = router;