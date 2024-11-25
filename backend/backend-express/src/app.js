const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config({ path: '.env' });

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

console.log('Toutes les vars:', process.env);
console.log(process.env.DB_USER);

// Configuration DBQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
}); 

// Route exemple
app.get('/api/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ message: "Connexion réussie", timestamp: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});