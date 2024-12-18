import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client'; // Import de Socket.IO
import Message from '../../components/Message/Message';
import './UserChat.css';

function UserChat({ selectedUser }) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [socket, setSocket] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const MAX_MESSAGE_LENGTH = 200; // Limite de caractères

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await fetch('/user/get-user-infos');
                if (response.ok) {
                    const data = await response.json();
                    setUserInfo(data);
                    console.log('userInfo:', data);

                } else {
                    console.error('Erreur lors de la récupération des informations utilisateur');
                }
            } catch (error) {
                console.error('Erreur de récupération des informations utilisateur:', error);
            }
        };

        fetchUserInfo();
    }, []);

    // Initialisation du socket
    useEffect(() => {
        const newSocket = io('http://localhost:5000'); // URL du serveur backend
        newSocket.on('connect', () => {
            console.log('Connecté au serveur');
            newSocket.emit('message', { message: 'Hello depuis le client de test' });
        });
        setSocket(newSocket);

        // Nettoyer à la désinstallation
        return () => {
            newSocket.disconnect();
        };
    }, []);

    // Récupération des messages via l'API au chargement
    useEffect(() => {
        const fetchMessages = async () => {
            if (selectedUser && selectedUser.user2_id) {
                try {
                    const response = await fetch(`/chat/recent-conversations/${selectedUser.user2_id}`);
                    if (response.ok) {
                        const data = await response.json();
                        console.log(data);
                        setMessages(data.messages);
                    } else {
                        console.error('Erreur lors de la récupération des messages');
                    }
                } catch (error) {
                    console.error('Erreur de récupération des messages:', error);
                }
            }
        };

        fetchMessages();
    }, [selectedUser]);

    // Écouter les messages reçus via Socket.IO
    useEffect(() => {
        if (socket) {
            socket.on('receive-message', (message) => {
                console.log('Message reçu via socket:', message);
                setMessages((prevMessages) => [...prevMessages, message]);
            });
        }
    }, [socket]);

    // Gestion de l'envoi de message
    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            const messageData = {
                type: 'sendMessage',
                message: {
                    sender: {
                        id: userInfo.id, username: userInfo.username // After authentification change the Hard code
                    },
                    message: newMessage,
                },
                receiverData: {
                    id: selectedUser.user2_id, username: selectedUser.user2_first_name
                },
            };

            try {
                // Envoi via Socket.IO
                socket.emit('message', messageData);

                // Mise à jour locale immédiate
                setMessages((prevMessages) => [...prevMessages, {
                    sender: { id: userInfo.id, username: userInfo.username },
                    message: newMessage,
                }]);

                setNewMessage('');
            } catch (error) {
                console.error('Erreur lors de l\'envoi du message:', error);
            }
        }
    };

    // Gestion de la limite de caractères
    const handleInputChange = (e) => {
        const input = e.target.value;
        if (input.length <= MAX_MESSAGE_LENGTH) {
            setNewMessage(input);
        }
    };

    return (
        <div className="chat-window">
            {selectedUser ? (
                <>
                    <h2>Chat with {selectedUser.user2_first_name} {selectedUser.user2_last_name}</h2>
                    <Message messages={messages} currentUserId={userInfo.id} />
                    <div className="message-input">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={handleInputChange}
                            placeholder="Tapez un message..."
                        />
                        <button onClick={handleSendMessage}><i className="fa-solid fa-arrow-up"></i></button>
                    </div>
                    <div className="char-counter">
                        {newMessage.length}/{MAX_MESSAGE_LENGTH}
                    </div>
                </>
            ) : (
                <p>Sélectionnez un utilisateur pour commencer à discuter.</p>
            )}
        </div>
    );
}

export default UserChat;