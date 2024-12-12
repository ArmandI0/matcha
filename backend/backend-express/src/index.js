import express from 'express'
import routes from './routes/routing.js'
import rtAuth from './routes/authRoute.js';
import cookieParser from 'cookie-parser';
import jwtToken from './services/jwtAuthenticate.js';
import { decode } from 'jsonwebtoken';

const app = express();

//Convertie les json
app.use(express.json());
//Ajoute les cookies a req.cookies
app.use(cookieParser())


app.use('/auth', rtAuth);

// function de test pour le backend
// app.get('/test', function (req, res) {
//   // Cookies that have not been signed
//   jwtToken.verifyAuthentification(req.cookies.authToken);
//   return res.status(200).json({
//     test: 'test',
//     response: decode
//   });
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