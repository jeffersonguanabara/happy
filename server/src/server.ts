import express from 'express';

import './database/connection';

const app = express();
app.use(express.json());

app.get('/users', (resquest, response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(3333);


// Rota = conjunto
// Recurso = nesse caso é o usuario

/* Métodos HTTP 
  GET = Buscar uma informação
  POST = Criando uma informação
  PUT = Editando uma informação
  DELETE = Deletando uma informação
*/

/* Parâmetros
  Query params: http://localhost:3333/users?search=diego
  Route params: http://localhost:3333/users/:id
        enviado pelo corpo da requisição.
*/