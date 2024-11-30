const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/recent-conversations/:userId/:chatUserId', chatController.getConversation);
router.get('/get-conversations-list/:userId', chatController.getConversationsList);
router.post('/send-message', chatController.sendMessage);

module.exports = router;
