import React, { useState, useEffect } from 'react';
import './Chat.css';
import UsersList from './features/UsersList/UsersList';
import UserChat from './features/UserChat/UserChat';

function Chat() {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    return (
        <div className="chat-component">
            <UsersList onUserClick={handleUserClick} />
            <UserChat selectedUser={selectedUser} />
        </div>
    );
}

export default Chat;
