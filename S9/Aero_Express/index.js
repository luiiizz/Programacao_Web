/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Henrique Bispo 
DATA: 26/03/2023 */

// Importando express e arquivos com rotas
const express = require('express');
const routes = require('./routes');

const app = express();
const db = require('./database.js');


app.use(express.json());
app.use('/', routes);


db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
