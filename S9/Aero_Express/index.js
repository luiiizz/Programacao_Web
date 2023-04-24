const express = require('express');
const app = express();

app.use(express.json());

// Lista de passageiros
let passageiros = [
  { id: 1, nome: 'Luiz Henrique', cpf: '123.456.789-00', telefone: '(11) 1234-5678', email: 'luizhenrique@gmail.com' },
  { id: 2, nome: 'Lorrayne', cpf: '987.654.321-00', telefone: '(11) 8765-4321', email: 'lorrayne@gmail.com' }
];

/*Recuperar a lista de passageiros:
Método: GET
Rota: /api/passageiros
Descrição: Recupera a lista de todos os passageiros cadastrados no sistema.
Resposta de sucesso (código 200 OK):*/

app.get('/api/passageiros', (req, res) => {
  res.json(passageiros);
});

/*Criar um novo passageiro:
Método: POST
Rota: /api/passageiros
Descrição: Cria um novo passageiro com as informações enviadas no corpo da requisição.
*/

app.post('/api/passageiros', (req, res) => {
  const novoPassageiro = req.body;
  novoPassageiro.id = passageiros.length + 1;
  passageiros.push(novoPassageiro);
  res.status(201).json(novoPassageiro);
});

/*Recuperar informações de um passageiro específico por ID:
Método: GET
Rota: /api/passageiros/{passageiro_id}
Descrição: Recupera as informações do passageiro correspondente ao ID informado.
Resposta de sucesso (código 200 OK):*/

app.get('/api/passageiros/:passageiro_id', (req, res) => {
  const id = Number(req.params.passageiro_id);
  const passageiro = passageiros.find(p => p.id === id);
  if (passageiro) {
    res.json(passageiro);
  } else {
    res.status(404).send('Passageiro não encontrado');
  }
});

/*Atualizar informações de um passageiro específico por ID:

Método: PUT
Rota: /api/passageiros/{passageiro_id}
Descrição: Atualiza as informações do passageiro correspondente ao ID informado com os dados enviados no corpo da requisição.*/

app.put('/api/passageiros/:passageiro_id', (req, res) => {
  const id = Number(req.params.passageiro_id);
  const index = passageiros.findIndex(p => p.id === id);
  if (index !== -1) {
    passageiros[index] = { ...passageiros[index], ...req.body };
    res.json(passageiros[index]);
  } else {
    res.status(404).send('Passageiro não encontrado');
  }
});

/*Excluir um passageiro específico por ID:
Método: DELETE
Rota: /api/passageiros/{passageiro_id}
Descrição: Exclui o passageiro correspondente ao ID informado do sistema.
Resposta de sucesso (código 204 No Content): sem conteúdo na resposta.*/
app.delete('/api/passageiros/:passageiro_id', (req, res) => {
  const id = Number(req.params.passageiro_id);
  passageiros = passageiros.filter(p => p.id !== id);
  res.sendStatus(204);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
