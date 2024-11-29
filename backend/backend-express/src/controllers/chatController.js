
import db from '../config/database.js';

// Récupérer les messages d'une conversation
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


// Récupérer la liste des utilisateurs avec qui l'utilisateur a une conversation
const getUsersList = async (req, res) => {
    const userId = 1; // Remplace avec l'id dynamique de l'utilisateur authentifié

    try {
        const query = `
            SELECT DISTINCT 
                CASE 
                    WHEN user1_id = $1 THEN user2_id 
                    ELSE user1_id 
                END AS user_id
            FROM conversations
            WHERE user1_id = $1 OR user2_id = $1;
        `;

        const result = await db.query(query, [userId]);
        const userIds = result.rows.map(row => row.user_id);

        if (userIds.length === 0) {
            return res.status(200).json([]);
        }

        const userIdPlaceholders = userIds.map((_, index) => `$${index + 2}`).join(', ');

        const usersDetailsQuery = `
            SELECT u.id AS user_id, u.username, up.first_name, up.last_name, up.gender,
                   c.last_activity, 
                   -- Récupérer le dernier message du tableau JSON
                   c.messages -> (jsonb_array_length(c.messages) - 1) ->> 'message' AS last_message
            FROM users u
            JOIN user_profiles up ON u.id = up.user_id
            LEFT JOIN conversations c ON 
                (c.user1_id = u.id AND c.user2_id = $1) 
                OR (c.user1_id = $1 AND c.user2_id = u.id)
            WHERE u.id IN (${userIdPlaceholders})
            ORDER BY c.last_activity DESC;
        `;

        const usersDetailsResult = await db.query(usersDetailsQuery, [userId, ...userIds]);

        return res.status(200).json(usersDetailsResult.rows);
    } catch (error) {
        console.error('Error fetching users list:', error);
        return res.status(500).send('Internal Server Error');
    }
};

const sendMessage = async (req, res) => {
    const { sender_user_id, receiver_user_id, message } = req.body;

    if (!sender_user_id || !receiver_user_id) {
        return res.status(400).send('Sender or receiver user ID is missing');
    }

    try {
        const conversationQuery = `
            SELECT id, messages 
            FROM conversations 
            WHERE (user1_id = $1 AND user2_id = $2) 
            OR (user1_id = $2 AND user2_id = $1)
            LIMIT 1;
        `;
        const conversationResult = await db.query(conversationQuery, [sender_user_id.id, receiver_user_id]);

        let updatedMessages;
        let conversationId;

        if (conversationResult.rows.length > 0) {
            const conversation = conversationResult.rows[0];
            updatedMessages = [...conversation.messages, {
                sender: sender_user_id,
                message,
                sent_at: new Date().toISOString(),
            }];
            conversationId = conversation.id;

            const updateQuery = `
                UPDATE conversations
                SET messages = $1, last_activity = CURRENT_TIMESTAMP
                WHERE id = $2
                RETURNING id, messages, last_activity;
            `;
            const updateResult = await db.query(updateQuery, [
                JSON.stringify(updatedMessages),
                conversationId
            ]);

            return res.status(200).json(updateResult.rows[0]);
        } else {
            updatedMessages = [{
                sender: sender_user_id,
                message,
                sent_at: new Date().toISOString(),
            }];

            const insertQuery = `
                INSERT INTO conversations (user1_id, user2_id, messages, last_activity)
                VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
                RETURNING id, messages, last_activity;
            `;
            const insertResult = await db.query(insertQuery, [
                sender_user_id.id,
                receiver_user_id,
                JSON.stringify(updatedMessages),
            ]);

            return res.status(200).json(insertResult.rows[0]);
        }
    } catch (error) {
        console.error('Error sending message:', error);
        return res.status(500).send('Internal Server Error');
    }
};

// module.exports = {...} => export const chat = {...}

const chatController = {
    getConversation,
    getUsersList,
    sendMessage,
};

export default chatController;
