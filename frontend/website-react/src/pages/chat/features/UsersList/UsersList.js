import React from 'react';
import User from '../../components/User/User';

function UsersList({ users, onUserClick }) {
    return (
        <div className="users-list">
            {users.map((user, index) => (
                <User
                    key={index}
                    name={user.name}
                    lastMessage={user.lastMessage}
                    date={user.date}
                    onClick={() => onUserClick(user)}
                />
            ))}
        </div>
    );
}

export default UsersList;
