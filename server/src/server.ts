import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

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