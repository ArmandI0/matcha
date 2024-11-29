import database from '../../../config/database.js';
import queries from '../queries.js';

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
//      Reorder all conversations to ensure userId is always in user1_id for simplicity
//          @userId -> ID of the requesting user
//          @conversations -> Array of conversations

const getFormattedConversations = (userId, conversations) => {
    return conversations.map(conversation => {
        if (conversation.user2_id === userId) {
            return {
                ...conversation,
                user1_id: conversation.user2_id,
                user2_id: conversation.user1_id,
                user1_first_name: conversation.user2_first_name,
                user1_last_name: conversation.user2_last_name,
                user2_first_name: conversation.user1_first_name,
                user2_last_name: conversation.user1_last_name,
            };
        }
        return conversation;
    });
};

// | addLastMessage
//      Add variable last_message to tab
//          @conversations -> Array of conversations

const addLastMessage = (conversations) => {
    return conversations.map(conversation => {
        const lastMessage = conversation.messages.length > 0 ? conversation.messages[conversation.messages.length - 1] : null;
        return {
            ...conversation,
            last_message: lastMessage,
        };
    });
};

// ------------- Main function -------------

const getConversationsList = async (req, res) => {
    try {
        const userId = parseInt(req.params.userId, 10);
        let conversations   = await getAllConversations(userId);
        conversations       = getFormattedConversations(userId, conversations);
        conversations        = addLastMessage(conversations)
        return res.status(200).json(conversations);
    } catch (error) {
        console.error('Error fetching users list:', error);
        return res.status(500).send('Internal Server Error');
    }
};

export default getConversationsList;    