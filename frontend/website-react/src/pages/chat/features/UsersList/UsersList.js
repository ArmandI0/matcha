import React, { useState, useEffect } from 'react';
import User from '../../components/User/User';

const formatDate = (date) => {
    const options = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };
    
    return new Date(date).toLocaleString('fr-FR', options).replace(',', '').replace('/', '.').replace('/', '.');
};


function UsersList({ onUserClick }) {
    const [conversations, setConversations] = useState([]);
    const currentUserId = 'e7b2e100-9a69-4d81-9685-3885f50c4cb3';
    useEffect(() => {
        const fetchConversations = async () => {
            try {
                const response = await fetch(`/api/chat/get-conversations-list/${currentUserId}`);
                const data = await response.json();
                console.log(data)
                setConversations(data);
            } catch (error) {
                console.error('Erreur de récupération des utilisateurs:', error);
            }
        };

        fetchConversations();
    }, [currentUserId]);

    return (
        <div className="conversations-list">
            {conversations.map((conversation, index) => (
                <User
                    key={index}
                    name={conversation.user2_first_name}
                    lastMessage={conversation.last_message.message}
                    date={formatDate(conversation.last_activity)}
                    onClick={() => onUserClick(conversation)}
                />
            ))}
        </div>
    );
}

export default UsersList;
