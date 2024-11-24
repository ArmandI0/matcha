import React from 'react';
import Message from '../../components/Message/Message';
import './UserChat.css'

function UserChat({ selectedUser }) {
    return (
        <div className="chat-window">
            {selectedUser ? (
                <Message user={selectedUser} />
            ) : (
                <p>Sélectionnez un utilisateur pour commencer à discuter.</p>
            )}
        </div>
    );
}

export default UserChat;
