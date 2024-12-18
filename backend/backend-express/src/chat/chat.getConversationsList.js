import database from '../config/database.js';
import jwt from 'jsonwebtoken';
import queries from './chat.queries.js';

// ------------- Queries function -------------

// | getAllConversations
//      Get all conversations for a user -> getAllConversations(userId)
//          @userId -> ID of the requesting user

const getAllConversations = async (userId) => {
    const result = await database.query(queries.getConversationsList, [userId]);
    if (result.rows && result.rows.length > 0) {
        return result.rows;
    } else {
        return [];
    }
};

// | getFormattedConversations
//      Reorder all conversations to ensure userId is always in user1_id for simplicity and add last message -> getFormattedConversations(userId, conversations)
//          @userId -> ID of the requesting user
//          @conversations -> Array of conversations

const getFormattedConversations = (userId, conversations) => {
    return conversations.map(conversation => {
        const lastMessage = conversation.messages.length > 0 ? conversation.messages[conversation.messages.length - 1] : null;
        if (conversation.user2_id === userId) {
            return {
                ...conversation,
                user1_id: conversation.user2_id,
                user2_id: conversation.user1_id,
                user1_first_name: conversation.user2_first_name,
                user1_last_name: conversation.user2_last_name,
                user2_first_name: conversation.user1_first_name,
                user2_last_name: conversation.user1_last_name,
                last_message: lastMessage,
            };
        }
        return {
            ...conversation,
            last_message: lastMessage,
        };
    });
};

// ------------- Main function -------------

const getConversationsList = async (req, res) => {
    try {
        const userId = jwt.verify(req.cookies.authToken, process.env.JWT_KEY).id;
        const jwtToken = jwt.verify(req.cookies.authToken, process.env.JWT_KEY);
        console.log('jwtToken.id:', jwtToken.id);
        console.log('userId:', userId);
        const conversations = getFormattedConversations(userId, await getAllConversations(userId));
        return res.status(200).json(conversations);
    } catch (error) {
        console.error('Error fetching users list:', error);
        return res.status(500).send('Internal Server Error');
    }
};

export default getConversationsList;    