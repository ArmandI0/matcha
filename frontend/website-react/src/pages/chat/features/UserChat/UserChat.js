import React, { useState, useEffect } from 'react';
import Message from '../../components/Message/Message';
import './UserChat.css';

function UserChat({ selectedUser }) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const currentUserId = 1;

    useEffect(() => {
        const fetchMessages = async () => {
            if (selectedUser && selectedUser.user_id) {
                try {
                    const response = await fetch(`/api/chat/recent-conversations/${currentUserId}/${selectedUser.user_id}`);
                    if (response.ok) {
                        const data = await response.json();
                        console.log(data);
                        setMessages(data);
                    } else {
                        console.error('Erreur lors de la récupération des messages');
                    }
                } catch (error) {
                    console.error('Erreur de récupération des messages:', error);
                }
            }
        };

        fetchMessages();
    }, [selectedUser, currentUserId]);

    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            const messageData = {
                sender_user_id: currentUserId,
                receiver_user_id: selectedUser.user_id,
                message: newMessage
            };

            try {
                const response = await fetch('/api/chat/send-message', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(messageData),
                });

                if (response.ok) {
                    const sentMessage = await response.json();
                    setMessages([...messages, sentMessage]);
                    setNewMessage('');
                } else {
                    console.error('Erreur lors de l\'envoi du message');
                }
            } catch (error) {
                console.error('Erreur lors de l\'envoi du message:', error);
            }
        }
    };

    return (
        <div className="chat-window">
            {selectedUser ? (
                <>
                    <h2>Chat with {selectedUser.first_name} {selectedUser.last_name}</h2>
                    <Message messages={messages} currentUserId={currentUserId} />
                    <div className="message-input">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Tapez un message..."
                        />
                        <button onClick={handleSendMessage}><i className="fa-solid fa-arrow-up"></i></button>
                    </div>
                </>
            ) : (
                <p>Sélectionnez un utilisateur pour commencer à discuter.</p>
            )}
        </div>
    );
}

export default UserChat;
