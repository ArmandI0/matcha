const db = require('../config/database');

const getRecentConversations = async (req, res) => {
    const userId = 1; // BRUT 

    try {
        const query = `
            SELECT sender_user_id, receiver_user_id, message, sent_at 
            FROM private_messages 
            WHERE sender_user_id = $1 
            OR receiver_user_id = $1 
            ORDER BY sent_at DESC;
        `;

        const result = await db.query(query, [userId]);

        return (res.status(200).json(result.rows));
    } catch (error) {
        console.error('Error fetching conversations:', error);
        return (res.status(500).send('Internal Server Error'));
    }
};

module.exports = {
    getRecentConversations,
};
