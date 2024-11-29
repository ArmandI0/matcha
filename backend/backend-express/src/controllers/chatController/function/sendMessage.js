import database from '../../../config/database.js';
import queries from '../queries.js'

// ------------- Queries function -------------

// | fetchConversation
//      Get the conversation between two users -> fetchConversation (userId, receiverId) 
//          @userId -> ID of the requesting user
//          @receiverId -> ID of the user selected (in the UserList)  

const fetchConversation = async (userId, receiverId) => {
    const result = await database.query(queries.sendMessage.fetchConversation, [userId, receiverId]);
    if (result.rows && result.rows.length > 0) {
        return result.rows[0];
    } else {
        return null;
    }
}

// | updateConversation
//      If the conversation exists, update the conversation with the new messages -> (messages, conversationId)
//          @messages -> The new array of messages (Old message concatenated with the new one)
//          @conversationId -> The conversation id obtained from the fetchConversation function

const updateConversation = async (messages, conversationId) => {
    const result = await database.query(queries.sendMessage.updateConversation, [JSON.stringify(messages), conversationId]);
    return (result.rowAffected);
}

// | insertConversation
//      If the conversation doesn't exists, insert the conversation with the first message -> (senderId, receiverId, messages)
//          @userId -> ID of the requesting user
//          @receiverId -> ID of the user selected (in the UserList)         
//          @messages -> The created array of messages

const insertConversation = async (senderId, receiverId, messages) => {
    const result = await database.query(queries.sendMessage.insertConversation, [senderId, receiverId, messages]);
    return (result.rowAffected);
}

// | getNewMessage
//      Get the correctly formatted array for insert the new message in the conversation array -> (senderData, message)
//          @senderData -> Array of informations of the user, formatted {id: id, username: username}
//          @message -> The text message

const getNewMessage = (senderData, message) => {
    return ({
        sender: senderData,
        message: message,
        sent_at: new Date().toISOString()
    })
}

// ------------- Main function -------------

const sendMessage = async (req, res) => {
    try {
        await database.query('BEGIN');
        const { message, receiverData } = req.body;
        const senderData                = message.sender;
        
        if (!message || !message.message || !receiverData || !receiverData.user_id|| !senderData || !senderData.id || !senderData.username) {
            return res.status(400).send('Bad request: missing data');
        }

        const conversation              = await fetchConversation(senderData.id, receiverData.user_id);
        const newMessage                = getNewMessage(senderData, message.message);

        if (conversation) {
            const updatedMessages = conversation.messages;
            if (!Array.isArray(conversation.messages)) {
                throw new Error('Conversation messages is not an array');
            }               
            updatedMessages.push(newMessage);
            const affectedRows = await updateConversation(updatedMessages, conversation.id);
            if (affectedRows === 0) {
                throw new Error("Update failed : No rows affected");
            }
        } else {
            const affectedRows = await insertConversation(senderData.id, receiverData.user_id, [newMessage]);
            if (affectedRows === 0) {
                throw new Error("Insertion failed : No rows affected");
            }
        }

        await database.query('COMMIT');
        return res.status(200).json(newMessage);
    } catch (error) {
        await database.query('ROLLBACK');
        console.error('Error sending message:', error);
        return res.status(500).send('Internal Server Error');
    }
    
};

export default sendMessage;