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
