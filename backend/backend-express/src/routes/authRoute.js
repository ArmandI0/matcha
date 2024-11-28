const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/recent-conversations/:userId/:chatUserId', chatController.getConversation);
router.get('/get-users-list', chatController.getUsersList);
router.post('/send-message', chatController.sendMessage);

module.exports = router;
