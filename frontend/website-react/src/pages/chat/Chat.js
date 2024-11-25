import React, { useState } from 'react';
import './Chat.css';
import UsersList from './features/UsersList/UsersList';
import UserChat from './features/UserChat/UserChat';
import PrimarySearchAppBar from '../../features/NavBar/NavBar';

function Chat() {
    const [selectedUser, setSelectedUser] = useState(null);

    const users = [
        { name: "Benoit", lastMessage: "Je ne suis pas là", date: "Today: 17:50" },
        { name: "Armand", lastMessage: "Arrête de dire que je suis aigri", date: "Today: 16:30" },
        { name: "Dorian", lastMessage: "J'adore le grappling", date: "Today: 14:50" },
        { name: "Heliam", lastMessage: "Contacte mon manager : chatgpt.com", date: "Today: 12:00" },
        { name: "Emile", lastMessage: "Black ops 6", date: "Today: 11:00" },
    ];

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
