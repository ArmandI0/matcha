// const db = require('../config/database'); => EMILE TU AS 50 ans ou quoi ca se fait plus 
// import db from '../config/database';
import express from 'express'
import routes from './routes/routing.js'
// Recupere l'objet expresse et init l'app qui  va servir de backend
const app = express();

// Middleware : (un middleware c'est un truc qui bricole la requete Emile enfin c'est ce que j'ai cru comprenndre. Ca prend la requete et ca check ce que tu lui demande 
// et ca s'execute a la suuite chaque middleware) 
// parse automatiquement les JSONS a reception -> (Ajoute les donnees parsees dans req.body)


// Routing pour le chat

app.use(express.json());


// Routing
app.use('/api', routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});


// Démarrage du serveur avec vérification de la DB

// module.exports = app; => pas COMMONJS 

export {app}; // ESmodule