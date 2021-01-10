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

require('./routes')(app)


app.listen(SERVER_PORT, () => {
  console.log(`server is running on ${SERVER_PORT}`);
});
