import db from '../../../config/database.js';
import queries from '../queries.js'

// ------------- Queries function -------------

// | fetchConversation
//      Get the conversation between two users -> fetchConversation (userId, receiverId) 
//          @userId -> ID of the requesting user
//          @receiverId -> ID of the user selected (in the UserList)  

const fetchConversation = async (userId, receiverId) => {
    const result = await db.query(queries.sendMessage.fetchConversation, [userId, receiverId]);
    return (result.rows[0]);
}

// | updateConversation
//      If the conversation exists, update the conversation with the new messages -> (messages, conversationId)
//          @messages -> The new array of messages (Old message concatenated with the new one)
//          @conversationId -> The conversation id obtained from the fetchConversation function

const updateConversation = async (messages, conversationId) => {
    await db.query(queries.sendMessage.updateConversation, [JSON.stringify(messages), conversationId])
}

// | insertConversation
//      If the conversation doesn't exists, insert the conversation with the first message -> (senderId, receiverId, messages)
//          @userId -> ID of the requesting user
//          @receiverId -> ID of the user selected (in the UserList)         
//          @messages -> The created array of messages
    
const insertConversation = async (senderId, receiverId, messages) => {
    const result = await db.query(queries.sendMessage.insertConversation, [senderId, receiverId, messages]);
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
        const { message, receiverData } = req.body;
        const senderData                = message.sender;

        const conversationArray         = await fetchConversation(senderData.id, receiverData.user_id);
        const newMessage                = getNewMessage(senderData, message.message);

        if (conversationArray)
        {
            const updatedMessages = conversationArray.messages;
            
            updatedMessages.push(newMessage);
            await updateConversation(updatedMessages, conversationArray.id);
        }
        else
            await insertConversation(senderData.id, receiverData.user_id, [newMessage]);

        return res.status(200).json(newMessage);
    } catch (error) {
        console.error('Error sending message:', error);
        return res.status(500).send('Internal Server Error');
    }
};

export default sendMessage;