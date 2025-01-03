import express from 'express';
import chatController from '../controllers/chatController/chatController.js';

const router = express.Router();


const routes = {
    chat: express.Router(),
}
 


// CHAT

routes.chat.get('/recent-conversations/:userId/:chatUserId', chatController.getConversation);
routes.chat.get('/get-conversations-list/:userId', chatController.getConversationsList);
routes.chat.post('/send-message', chatController.sendMessage);

router.use('/chat', routes.chat);

export default router;