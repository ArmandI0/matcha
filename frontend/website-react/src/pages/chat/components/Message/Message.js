import React, { useState } from 'react';
import './Message.css';

function Message({ user }) {
    const [messages, setMessages] = useState([
        { sender: "Benoit", text: "Salut, comment ça va ?" },
        { sender: "Moi", text: "Bien et toi ?" },
    ]);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { sender: "Moi", text: newMessage }]);
            setNewMessage("");
        }
    };

    return (
        <div className="message-component">
            <div className="message-header">
                <h2>MatChatter avec {user.name}</h2>
            </div>
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender === "Moi" ? "sent" : "received"}`}>
                        <div className="message-text">{msg.text}</div>
                    </div>
                ))}
            </div>
            <div className="message-input">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Message..."
                />
                <button onClick={handleSendMessage}><i class="fa-solid fa-arrow-up"></i></button>
            </div>
        </div>
    );
}

export default Message;
