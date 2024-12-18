import express from 'express'
import rtAuth from './auth/auth.routes.js';
import rtUser from './user/user.routes.js';
import rtChat from './chat/chat.routes.js';
import cookieParser from 'cookie-parser';
import jwtToken from './auth/auth.jwtFunctions.js';
import { decode } from 'jsonwebtoken';
import { Server } from 'socket.io'; 
import { createServer } from 'http'; 

const app = express();
const PORT = process.env.PORT || 5000; // Définit un port par défaut

// Convertie les JSON
app.use(express.json());
//Ajoute les cookies a req.cookies
app.use(cookieParser())

try {
  app.use('/auth', rtAuth);
  app.use('/user', rtUser);
  app.use('/chat', rtChat);

}
catch (error) {
  console.log('error :', error);
}

// function de test pour le backend
// app.get('/test', function (req, res) {
//   // Cookies that have not been signed
//   jwtToken.verifyAuthentification(req.cookies.authToken);
//   return res.status(200).json({
//     test: 'test',
//     response: decode
//   });
// });
  

// Crée le serveur HTTP
const server = createServer(app);

// Intègre Socket.IO avec le serveur HTTP existant
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // URL de ton front-end
    methods: ["GET", "POST"],
  },
});

// Gestion des connexions Socket.IO
io.on('connection', (socket) => {
  console.log(`Nouvelle connexion : ${socket.id}`);

  socket.on('message', (data) => {
      console.log(`Message reçu :`, data);
      io.emit('message', data);
  });

  socket.on('disconnect', () => {
      console.log(`Déconnexion : ${socket.id}`);
  });

  socket.on('error', (err) => {
      console.error(`Erreur Socket.IO : ${err.message}`);
  });
});

// Lance le serveur HTTP (Express + Socket.IO)
server.listen(PORT, () => {
  console.log(`Serveur API et Socket.IO démarré sur http://localhost:${PORT}`);
});

export { app }; // ESModules
