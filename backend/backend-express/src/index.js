const express = require('express');
const database = require('./config/database');
const User = require('./models/User');

const app = express();
app.use(express.json());

// Routes
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Démarrage
database.sync()
  .then(() => {
    app.listen(5000, () => {
      console.log('Serveur démarré sur le port 5000');
    });
  });