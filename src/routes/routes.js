import { Client } from 'pg';
import knex from '../../db/knex';

export const getAll = async (req, res) => {
  const users = await knex.select().from('users');
  res.send(users);
}

export const getUser = async (req, res) => {
  const user = await knex.select().from('users').where('id', req.params.user_id);
  res.send(user);
};

export const postUser = async (req, res) => {
  await knex('users').insert({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  })
  const users = await knex.select().from('users');
  res.send(users);
};

export const updateUser = async (req, res) => {
  await knex('users').where('id', req.params.id)
    .update({
      [req.body.field_name]: req.body.field_value,
    });
  const users = await knex.select().from('users');
  res.send(users);
};

export const deleteUser = async (req, res) => {
  await knex('users').where('id', req.params.id).delete();
  const users = await knex.select().from('users');
  res.send(users);
};