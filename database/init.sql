-- Create a simple users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    email VARCHAR(255),
    password VARCHAR(255),
);


CREATE TABLE list_of_preference (
    id SERIAL PRIMARY KEY,
    
);

CREATE TABLE users_profile (
    id SERIAL PRIMARY KEY,
    first_name  VARCHAR(100),
    FOREIGN KEY (username) REFERENCES users(username),
    gender VARCHAR(100),
    sexual_preference VARCHAR(255),
    biograpy VARCHAR(100),
    list_of_preference VARCHAR(100),
);

-- Simple test table
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content TEXT,
    user_id INTEGER REFERENCES users(id)
);

-- Add test post
INSERT INTO posts (title, content, user_id) VALUES
    ('Test post', 'Hello world', 1);