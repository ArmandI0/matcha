const queries = {
    sendMessage: {
        fetchConversation: `
            SELECT * FROM conversations 
            WHERE (user1_id = $1 AND user2_id = $2) OR (user1_id = $2 AND user2_id = $1)
            FOR UPDATE
        `,
        updateConversation: `
            UPDATE conversations
            SET messages = $1, last_activity = CURRENT_TIMESTAMP
            WHERE id = $2
        `,
        insertConversation: `
            INSERT INTO conversations (user1_id, user2_id, messages, last_activity)
            VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
        `
    },
    getConversation: `
        SELECT messages, last_activity FROM conversations 
        WHERE (user1_id = $1 AND user2_id = $2) OR (user1_id = $2 AND user2_id = $1)
        LIMIT 1
    `,
    getConversationsList: `
            SELECT 
                c.id AS conversation_id,
                c.user1_id,
                c.user2_id,
                c.messages,
                c.last_activity,
                u1.first_name AS user1_first_name,
                u2.first_name AS user2_first_name,
                u1.last_name AS user1_last_name,
                u2.last_name AS user2_last_name
            FROM 
                conversations c
            JOIN 
                user_profiles u1 ON c.user1_id = u1.user_id
            JOIN 
                user_profiles u2 ON c.user2_id = u2.user_id
            WHERE 
                c.user1_id = $1 OR c.user2_id = $1
            ORDER BY
                c.last_activity DESC;
    `,
};

export default queries;