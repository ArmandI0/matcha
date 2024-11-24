const express = require("express");
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'mydatabaseuser',
  password: 'mypassword',
  host: 'localhost',
  port: 5432,
  database: 'mydatabase'
});

app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Application exemple à l'écoute sur le port ${port}!`);
});
