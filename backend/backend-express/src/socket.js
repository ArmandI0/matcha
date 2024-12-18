import { Server } from 'socket.io';
import { handleChatMessage } from './chat/chat.handleSocket.js';

const initializeSocket = (app, server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000", // URL de ton front-end
      methods: ["GET", "POST"],
    },
  });

  io.on('connection', (socket) => {
    console.log(`Nouvelle connexion : ${socket.id}`);

    socket.on('message', async (data) => {
      console.log(`Message reçu :`, data);

      // Vérifiez le type de message et déléguez le traitement
      if (data.type === 'sendMessage') {
        await handleChatMessage(io, data);
      } else {
        // Gérer d'autres types de messages ici
        console.log('Autre type de message reçu');
      }
    });

    socket.on('disconnect', () => {
      console.log(`Déconnexion : ${socket.id}`);
    });

    socket.on('error', (err) => {
      console.error(`Erreur Socket.IO : ${err.message}`);
    });
  });
};

export default initializeSocket;