import db from '../../../config/database.js';

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

export default getUsersList;