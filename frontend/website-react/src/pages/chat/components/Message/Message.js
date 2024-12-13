import React from 'react';
import './Message.css';

function Message({ messages, currentUserId }) {
    const formatMessage = (text, lineLength = 50) => {
        const regex = new RegExp(`.{1,${lineLength}}`, 'g'); // Coupe le message à chaque lineLength caractères
        return text.match(regex)?.join('\n') || text;
    };

    return (
        <div className="message-component">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`message ${msg.sender.id === currentUserId ? 'sent' : 'received'}`}
                    >
                        <div className="message-text">{formatMessage(msg.message)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Message;