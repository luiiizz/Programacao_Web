/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Henrique Bispo 
DATA: 26/03/2023 */

const express = require('express');
const ControlePassageiros = require('./app/controles/ControlePassageiros');
const controlePassageiros = new ControlePassageiros();
const app = express();

app.use(express.json());

app.get('/', (req,res) => {
  res.send("Bem vindo ao meu servidor");
})
/*Recuperar a lista de passageiros:
Método: GET
Rota: /api/passageiros
Descrição: Recupera a lista de todos os passageiros cadastrados no sistema.
Resposta de sucesso (código 200 OK):*/

app.get('/api/passageiros', (req, res) => controlePassageiros.todos(req, res));
app.post('/api/passageiros', (req, res) => controlePassageiros.criar(req, res));
app.get('/api/passageiros/:id', (req, res) => controlePassageiros.apenasUm(req, res));
app.put('/api/passageiros/:id', (req, res) => controlePassageiros.atualizar(req, res));
app.delete('/api/passageiros/:id', (req, res) => controlePassageiros.deletar(req, res));

/*Criar um novo passageiro:
Método: POST
Rota: /api/passageiros
Descrição: Cria um novo passageiro com as informações enviadas no corpo da requisição.
*/

/*Recuperar informações de um passageiro específico por ID:
Método: GET
Rota: /api/passageiros/{passageiro_id}
Descrição: Recupera as informações do passageiro correspondente ao ID informado.
Resposta de sucesso (código 200 OK):*/


/*Atualizar informações de um passageiro específico por ID:

Método: PUT
Rota: /api/passageiros/{passageiro_id}
Descrição: Atualiza as informações do passageiro correspondente ao ID informado com os dados enviados no corpo da requisição.*/



/*Excluir um passageiro específico por ID:
Método: DELETE
Rota: /api/passageiros/{passageiro_id}
Descrição: Exclui o passageiro correspondente ao ID informado do sistema.
Resposta de sucesso (código 204 No Content): sem conteúdo na resposta.*/


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});