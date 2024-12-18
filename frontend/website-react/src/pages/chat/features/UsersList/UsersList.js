import React, { useState, useEffect } from 'react';
import User from '../../components/User/User';
import NewChat from '../../components/NewChat/NewChat';

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

    useEffect(() => {
        const fetchConversations = async () => {
            try {
                const response = await fetch(`/chat/get-conversations-list`);
                const data = await response.json();
                setConversations(data);
            } catch (error) {
                console.error('Erreur de récupération des utilisateurs:', error);
            }
        };

        fetchConversations();
    }, []);

    const handleCreateNewChat = (userId) => {
        console.log('Créer une nouvelle conversation avec:', userId);
    };

    return (
        <div className="conversations-list">
            <NewChat onCreateNewChat={handleCreateNewChat} />
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