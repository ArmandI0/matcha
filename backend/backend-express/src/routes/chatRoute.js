const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/recent-conversations', chatController.getRecentConversations);

module.exports = router;
