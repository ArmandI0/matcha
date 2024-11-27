const express = require('express');
const database = require('./config/database');



const app = express();

// Fonction pour vérifier la connexion à la DB
async function checkDatabaseConnection() {
  try {
    const client = await database.connect();
    await client.query('SELECT NOW()');
    client.release();
    console.log('✅ Base de données connectée avec succès');
    return true;
  } catch (error) {
    console.error('❌ Erreur de connexion à la base de données:', error.message);
    return false;
  }
}
// chat

const chatRoute = require('./routes/chatRoute');

app.use(express.json());
app.use('/api/chat', chatRoute); 

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// Démarrage du serveur avec vérification de la DB
const PORT = process.env.PORT || 3000;

async function startServer() {
  const isDatabaseConnected = await checkDatabaseConnection();
  
  if (isDatabaseConnected) {
    app.listen(PORT, () => {
      console.log(`🚀 Serveur démarré sur le port ${PORT}`);
    });
  } else {
    console.error('🛑 Impossible de démarrer le serveur : la base de données n\'est pas accessible');
    process.exit(1);
  }
}

startServer();

module.exports = app;