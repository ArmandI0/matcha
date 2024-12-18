import express from 'express';
import chatController from './chat.controller.js';

const rtChat = express.Router();

rtChat.get('/recent-conversations/:userId/:chatUserId', chatController.getConversation);
rtChat.get('/get-conversations-list', chatController.getConversationsList);
rtChat.post('/send-message', chatController.sendMessage);

export default rtChat;
