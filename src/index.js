import express from 'express';
import bodyParser from 'body-parser';
import {
  getAll,
  getUser,
  postUser,
  updateUser,
  deleteUser,
} from './routes/routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/users', getAll);
app.get('/users/:user_id', getUser);
app.post('/users', postUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);


app.listen(80);