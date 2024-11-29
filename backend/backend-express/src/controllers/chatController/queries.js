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
    }
};

export default queries;