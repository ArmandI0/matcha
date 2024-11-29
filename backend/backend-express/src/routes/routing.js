import express from 'express';
import chatController from '../controllers/chatController.js';
const router = express.Router();


const routes = {
    chat: express.Router(),
    auth: express.Router()
}
 


// CHAT



routes.chat.get('/recent-conversations/:userId/:chatUserId', chatController.getConversation);
routes.chat.get('/get-users-list', chatController.getUsersList);
routes.chat.post('/send-message', chatController.sendMessage);

// AUTH
// auth.post('/send-message', chatController.sendMessage);



router.use('/chat', routes.chat);
router.use('/auth', routes.auth);

export default router;