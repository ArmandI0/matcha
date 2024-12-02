import database from '../../../config/database.js';
import queries  from '../queries.js';

// ------------- Queries function -------------

// | fetchConversation
//      Get the conversation between two users -> fetchConversation (userId, receiverId) 
//          @userId -> ID of the requesting user
//          @receiverId -> ID of the user selected (in the UserList)  

const fetchConversation = async (userId, receiverId) => {
    const result = await database.query(queries.getConversation, [userId, receiverId]);
    if (result.rows && result.rows.length > 0) {
        return result.rows[0];
    } else {
        return [];
    }
}

// ------------- Main function -------------

const getConversation = async (req, res) => {
    
    try {
        const userId = req.params.userId;
        const receiverId = req.params.chatUserId;
        return res.status(200).send(await fetchConversation(userId, receiverId));
    } catch (error) {
        console.error('Error fetching conversation:', error);
        return res.status(500).send('Internal Server Error');
    }
};

export default getConversation;