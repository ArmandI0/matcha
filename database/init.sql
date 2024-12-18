DROP TABLE IF EXISTS private_messages, liked_profiles, profile_views, user_profiles, pictures, interests, users CASCADE;

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(100) UNIQUE,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE interests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    interest_0 VARCHAR(100),
    interest_1 VARCHAR(100),
    interest_2 VARCHAR(100),
    interest_3 VARCHAR(100),
    interest_4 VARCHAR(100)
);

CREATE TABLE pictures (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    picture_0 VARCHAR(100),
    picture_1 VARCHAR(100),
    picture_2 VARCHAR(100),
    picture_3 VARCHAR(100),
    picture_4 VARCHAR(100)
);

CREATE TABLE user_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    gender VARCHAR(50),
    sexual_preferences VARCHAR(255),
    biography VARCHAR(255),
    interests_id UUID REFERENCES interests(id),
    pictures_id UUID REFERENCES pictures(id),
    fame_rating INTEGER DEFAULT 0,
    location VARCHAR(255)
);

CREATE TABLE profile_views (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    viewed_profile_id UUID NOT NULL REFERENCES user_profiles(id),
    viewer_user_id UUID NOT NULL REFERENCES users(id),
    view_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(viewed_profile_id, viewer_user_id)
);

CREATE TABLE liked_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    liked_profile_id UUID NOT NULL REFERENCES user_profiles(id),
    sender_user_id UUID NOT NULL REFERENCES users(id),
    like_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(liked_profile_id, sender_user_id)
);

CREATE TABLE conversations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user1_id UUID NOT NULL,
    user2_id UUID NOT NULL,
    messages JSONB DEFAULT '[]'::JSONB,  -- Pour stocker les messages en JSON
    last_activity TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    conversation_active BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (user1_id) REFERENCES users(id),
    FOREIGN KEY (user2_id) REFERENCES users(id)
);

INSERT INTO "users" ("id", "username", "email", "password") VALUES
('07541785-e362-458b-a400-322ba95d94a8',	'ehalliez',	'ehalliez@ehalliez.ehalliez',	'$2b$10$wQUEQHagPgfEQhCm44bXlOiewPMvbGq6F8ehgrQNFlwxIy1opfJri'),
('6a7d28c7-7695-4d4c-a9e2-bbf35bf3cb82',	'aranger',	'aranger@aranger.aranger',	'$2b$10$IQ1dv2QMBZ60Lysk3WMBquTo.1hCSnZJaorAW8n4RxFYFgvavBsiG');


INSERT INTO "user_profiles" ("id", "user_id", "first_name", "last_name", "gender", "sexual_preferences", "biography", "interests_id", "pictures_id", "fame_rating", "location") VALUES
('f2bc8d21-a60d-4b15-9864-b2f4e1e480d4',	'07541785-e362-458b-a400-322ba95d94a8',	'ehalliez',	'ehalliez',	NULL,	NULL,	NULL,	NULL,	NULL,	0,	NULL),
('78c2f3e9-84a7-472a-9a64-e7b41cea758f',	'6a7d28c7-7695-4d4c-a9e2-bbf35bf3cb82',	'aranger',	'aranger',	NULL,	NULL,	NULL,	NULL,	NULL,	0,	NULL);

INSERT INTO "conversations" ("id", "user1_id", "user2_id", "messages", "last_activity", "conversation_active") VALUES
(gen_random_uuid(), '07541785-e362-458b-a400-322ba95d94a8',	'6a7d28c7-7695-4d4c-a9e2-bbf35bf3cb82',	'[{"sender": {"id": "07541785-e362-458b-a400-322ba95d94a8", "username": "ehalliez"}, "message": "Ce message vient de ehalliez", "sent_at": "2024-11-28T10:00:00Z"}, {"sender": {"id": "6a7d28c7-7695-4d4c-a9e2-bbf35bf3cb82", "username": "aranger"}, "message": "Ce message vient de aranger", "sent_at": "2024-11-28T10:05:00Z"}, {"sender": {"id": "07541785-e362-458b-a400-322ba95d94a8", "username": "ehalliez"}, "message": "test", "sent_at": "2024-12-18T15:12:00.227Z"}]',	'2024-12-18 15:12:00.227497',	't');

