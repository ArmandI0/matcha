import React from 'react';
import './User.css';

function User({ name, lastMessage, date, onClick }) {
    return (
        <div className="user" onClick={onClick}>
            <i className="fa-solid fa-user"></i>
            <div className="user-details">
                <div className="user-name">{name}</div>
                <div className="last-message">{lastMessage}</div>
            </div>
            <div className="message-date">{date}</div>
        </div>
    );
}

export default User;
