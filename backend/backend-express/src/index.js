// const db = require('../config/database'); => EMILE TU AS 50 ans ou quoi ca se fait plus 
// import db from '../config/database';
import express from 'express'
import routes from './routes/routing.js'
import rtAuth from './routes/authRoute.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser())
app.use(express.json());

app.use('/auth', rtAuth);

// function de test pour le backend
// app.get('/', function (req, res) {
//   // Cookies that have not been signed
//   console.log('Cookies: ', req.cookies.authToken);
//   return res.status(200)
// });

// Routing
app.use('/api', routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});

// Démarrage du serveur avec vérification de la DB

// module.exports = app; => pas COMMONJS 

export {app}; // ESmodule