import React from 'react';
import User from '../../components/User/User';

const formatDate = (date) => {
    const options = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };
    
    return new Date(date).toLocaleString('fr-FR', options).replace(',', '').replace('/', '.').replace('/', '.');
};


function UsersList({ users, onUserClick }) {
    return (
        <div className="users-list">
            {users.map((user, index) => (
                <User
                    key={index}
                    name={user.username}
                    lastMessage={user.last_message}
                    date={formatDate(user.last_activity)}
                    onClick={() => onUserClick(user)}
                />
            ))}
        </div>
    );
}

export default UsersList;
