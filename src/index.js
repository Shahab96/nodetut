const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const knex = require('../db/knex');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/users', (req, res) => {
  knex.select().from('users').then((users) => {
    res.send(users);
  });
});

app.get('/users/:user_id', (req, res) =>{
  knex.select().from('users').where('id', req.params.user_id).then((user) => {
    res.send(user);
  })
});

app.post('/users', (req, res) => {
  knex('users').insert({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  }).then(() => {
    knex.select().from('users').then((users) => {
      res.send(users);
    });
  });
});

app.put('/users/:id', (req, res) => {
  knex('users').where('id', req.params.id)
    .update({
      [req.body.field_name]: req.body.field_value,
    }).then(() => {
      knex.select().from('users').then((users) => {
        res.send(users);
      });
    });
});

app.delete('/users/:id', (req, res) => {
  knex('users').where('id', req.params.id).delete().then(() => {
    knex.select().from('users').then((users) => {
      res.send(users);
    });
  });
});

app.listen(80);