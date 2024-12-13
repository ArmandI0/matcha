import React, { useState } from 'react';
import './NewChat.css';

function NewChat({ onCreateNewChat }) {
    const [showForm, setShowForm] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    const handleToggleForm = () => {
        setShowForm(!showForm);
    };

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleUserClick = (userId) => {
        onCreateNewChat(userId);
        setShowForm(false);
        setSearchInput('');
    };

    return (
        <div className="new-chat-container">
            <div className="new-chat" onClick={handleToggleForm}>
                <div className="icon">+</div>
                <span className="label">Nouvelle conversation</span>
            </div>

            {showForm && (
                <div className="new-chat-form">
                    <input
                        type="text"
                        placeholder="Rechercher un utilisateur..."
                        value={searchInput}
                        onChange={handleInputChange}
                    />
                    <ul className="user-list">
                        {/* Example static users for demonstration purposes */}
                        {["Alice", "Bob", "Charlie"].map((user, index) => (
                            <li key={index} onClick={() => handleUserClick(user)}>
                                {user}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default NewChat;