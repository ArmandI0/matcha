const db = require('../config/database');

const getConversation = async (req, res) => {
    const userId = req.params.userId;
    const chatUserId = req.params.chatUserId;

    try {
        const query = `
            SELECT sender_user_id, receiver_user_id, message, sent_at
            FROM private_messages
            WHERE (sender_user_id = $1 AND receiver_user_id = $2) 
            OR (sender_user_id = $2 AND receiver_user_id = $1)
            ORDER BY sent_at ASC;
        `;

        const result = await db.query(query, [userId, chatUserId]);

        return res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching conversations:', error);
        return res.status(500).send('Internal Server Error');
    }
};



const getUsersList = async (req, res) => {
    const userId = 1;
    try {
        const query = `
            SELECT DISTINCT 
                CASE 
                    WHEN sender_user_id = $1 THEN receiver_user_id 
                    ELSE sender_user_id 
                END AS user_id
            FROM private_messages
            WHERE sender_user_id = $1 OR receiver_user_id = $1;
        `;

        const result = await db.query(query, [userId]);
        const userIds = result.rows.map(row => row.user_id);

        if (userIds.length === 0) {
            return res.status(200).json([]);
        }

        const userIdPlaceholders = userIds.map((_, index) => `$${index + 2}`).join(', ');

        const usersDetailsQuery = `
            SELECT u.id AS user_id, u.username, up.first_name, up.last_name, up.gender,
                   pm.message AS last_message, pm.sent_at AS last_sent_at
            FROM users u
            JOIN user_profiles up ON u.id = up.user_id
            LEFT JOIN private_messages pm ON 
                (pm.sender_user_id = u.id AND pm.receiver_user_id = $1) 
                OR (pm.sender_user_id = $1 AND pm.receiver_user_id = u.id)
            WHERE u.id IN (${userIdPlaceholders})
            ORDER BY pm.sent_at DESC
        `;

        const usersDetailsResult = await db.query(usersDetailsQuery, [userId, ...userIds]);

        const usersDetails = [];
        const seenUserIds = new Set();
        usersDetailsResult.rows.forEach(row => {
            if (!seenUserIds.has(row.user_id)) {
                seenUserIds.add(row.user_id);
                usersDetails.push(row);
            }
        });

        return res.status(200).json(usersDetails);
    } catch (error) {
        console.error('Error fetching users list:', error);
        return res.status(500).send('Internal Server Error');
    }
};

const sendMessage = async (req, res) => {
    const { sender_user_id, receiver_user_id, message } = req.body;

    try {
        const query = `
            INSERT INTO private_messages (sender_user_id, receiver_user_id, message, sent_at)
            VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
            RETURNING sender_user_id, receiver_user_id, message, sent_at;
        `;

        const result = await db.query(query, [sender_user_id, receiver_user_id, message]);

        return res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error sending message:', error);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getConversation,
    getUsersList,
    sendMessage,
};
