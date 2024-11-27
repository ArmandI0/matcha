import React from 'react';
import './Message.css';

function Message({ messages, currentUserId }) {
    return (
        <div className="message-component">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`message ${msg.sender_user_id === currentUserId ? 'sent' : 'received'}`}
                    >
                        <div className="message-text">{msg.message}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Message;
