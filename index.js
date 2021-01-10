const express = require('express');
const mysql = require('./db');
const app = express();
const { SERVER_PORT } = require('./env');

const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// app.use()

app.get('/', (req, res) => {
  res.status(200).send('stay a while');
});

app.get('/hello', (req, res) => {
  res.status(200).send(`Hello ${req.query.name}`);
});

app.get('/album', (req, res) => {
  mysql
    .query('Select * from album')
    .then((result) => res.status(200).json(result[0]))
    .catch((e) => res.status(500).send('Internal server error'));
});

app.get('/album/:id', (req, res) => {
  mysql
    .query('Select * from album where id=?', [req.params.id])
    .then((result) => res.status(200).json(result[0]))
    .catch((e) => res.status(500).send('Internal server error'));
});

app.post('/albums', (req, res) => {
  mysql
    .query('insert into album set ?', [req.body])
    .then((result) =>{
      mysql
        .query('select * from album where id=?', [result[0].insertId])
        .then((result) => res.status(201).json(result[0]))
        .catch((e) => res.status(500).send({ message: e }))
    })
    .catch((e) => res.status(500).send('internal error'));
});

app.listen(SERVER_PORT, () => {
  console.log(`server is running on ${SERVER_PORT}`);
});
