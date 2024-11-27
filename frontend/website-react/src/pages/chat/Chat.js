import React, { useState, useEffect } from 'react';
import './Chat.css';
import UsersList from './features/UsersList/UsersList';
import UserChat from './features/UserChat/UserChat';

function Chat() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/chat/recent-conversations');
                const data = await response.json();
                console.log(data)
                setUsers(data);
            } catch (error) {
                console.error('Erreur de récupération des utilisateurs:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    return (
        <div className="chat-component">
            <UsersList users={users} onUserClick={handleUserClick} />
            <UserChat selectedUser={selectedUser} />
        </div>
    );
}

export default Chat;
