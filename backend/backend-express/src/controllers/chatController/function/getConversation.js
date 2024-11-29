import db from '../../../config/database.js';

const getConversation = async (req, res) => {
    const userId = req.params.userId;
    const chatUserId = req.params.chatUserId;

    try {
        const query = `
            SELECT messages, last_activity
            FROM conversations
            WHERE (user1_id = $1 AND user2_id = $2) 
            OR (user1_id = $2 AND user2_id = $1)
            LIMIT 1;
        `;

        const result = await db.query(query, [userId, chatUserId]);

        if (result.rows.length === 0) {
            return res.status(404).send('Conversation not found');
        }

        // Récupérer la conversation avec les messages et la dernière activité
        const conversation = result.rows[0];

        // Formater les messages pour ajouter `sender_user_id`
        const messagesWithSenderId = conversation.messages.map(msg => ({
            ...msg,
            sender_user_id: msg.sender 
        }));

        // Retourner la conversation formatée
        return res.status(200).json({
            messages: messagesWithSenderId,
            last_activity: conversation.last_activity,
        });
    } catch (error) {
        console.error('Error fetching conversation:', error);
        return res.status(500).send('Internal Server Error');
    }
};

export default getConversation;