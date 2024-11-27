DROP TABLE IF EXISTS private_messages, liked_profiles, profile_views, user_profiles, pictures, interests, users CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE interests (
    id SERIAL PRIMARY KEY,
    interest_0 VARCHAR(100),
    interest_1 VARCHAR(100),
    interest_2 VARCHAR(100),
    interest_3 VARCHAR(100),
    interest_4 VARCHAR(100)
);

CREATE TABLE pictures (
    id SERIAL PRIMARY KEY,
    picture_0 VARCHAR(100),
    picture_1 VARCHAR(100),
    picture_2 VARCHAR(100),
    picture_3 VARCHAR(100),
    picture_4 VARCHAR(100)
);

CREATE TABLE user_profiles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    gender VARCHAR(50),
    sexual_preferences VARCHAR(255),
    biography VARCHAR(255),
    interests_id INTEGER REFERENCES interests(id),
    pictures_id INTEGER REFERENCES pictures(id),
    fame_rating INTEGER DEFAULT 0,
    location VARCHAR(255)
);

CREATE TABLE profile_views (
    id SERIAL PRIMARY KEY,
    viewed_profile_id INTEGER NOT NULL REFERENCES user_profiles(id),
    viewer_user_id INTEGER NOT NULL REFERENCES users(id),
    view_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(viewed_profile_id, viewer_user_id)
);

CREATE TABLE liked_profiles (
    id SERIAL PRIMARY KEY,
    liked_profile_id INTEGER NOT NULL REFERENCES user_profiles(id),
    sender_user_id INTEGER NOT NULL REFERENCES users(id),
    like_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(liked_profile_id, sender_user_id)
);

CREATE TABLE private_messages (
    id SERIAL PRIMARY KEY,
    sender_user_id INTEGER NOT NULL REFERENCES users(id),
    receiver_user_id INTEGER NOT NULL REFERENCES users(id),
    message TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, email, password)
VALUES
('user1', 'user1@example.com', 'password1'),
('user2', 'user2@example.com', 'password2');

INSERT INTO interests (interest_0, interest_1, interest_2, interest_3, interest_4)
VALUES
('Reading', 'Sports', 'Music', 'Gaming', 'Travel'),
('Cooking', 'Movies', 'Photography', 'Technology', 'Music');

INSERT INTO pictures (picture_0, picture_1, picture_2, picture_3, picture_4)
VALUES
('pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'),
('pic6.jpg', 'pic7.jpg', 'pic8.jpg', 'pic9.jpg', 'pic10.jpg');

INSERT INTO user_profiles (user_id, first_name, last_name, gender, sexual_preferences, biography, interests_id, pictures_id, fame_rating, location)
VALUES
((SELECT id FROM users WHERE username = 'user1'), 'John', 'Doe', 'Male', 'Hetero', 'Just a regular guy.', 
 (SELECT id FROM interests LIMIT 1), (SELECT id FROM pictures LIMIT 1), 5, 'New York'),
((SELECT id FROM users WHERE username = 'user2'), 'Jane', 'Smith', 'Female', 'Bi', 'Just a creative soul.', 
 (SELECT id FROM interests OFFSET 1 LIMIT 1), (SELECT id FROM pictures OFFSET 1 LIMIT 1), 7, 'Los Angeles');

INSERT INTO private_messages (sender_user_id, receiver_user_id, message, sent_at)
VALUES
((SELECT id FROM users WHERE username = 'user1'), (SELECT id FROM users WHERE username = 'user2'), 'Hello Jane, how are you?', CURRENT_TIMESTAMP),
((SELECT id FROM users WHERE username = 'user2'), (SELECT id FROM users WHERE username = 'user1'), 'Hi John! I am good, thanks for asking.', CURRENT_TIMESTAMP),
((SELECT id FROM users WHERE username = 'user1'), (SELECT id FROM users WHERE username = 'user2'), 'Great to hear! What have you been up to?', CURRENT_TIMESTAMP),
((SELECT id FROM users WHERE username = 'user2'), (SELECT id FROM users WHERE username = 'user1'), 'Just working on some projects. You?', CURRENT_TIMESTAMP);
