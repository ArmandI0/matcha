CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    Username VARCHAR(100) UNIQUE,
    Email VARCHAR(255),
    Password VARCHAR(255)
);


CREATE TABLE ListOfInterest (
    id SERIAL PRIMARY KEY,
    Interest0 VARCHAR(100),
    Interest1 VARCHAR(100),
    Interest2 VARCHAR(100),
    Interest3 VARCHAR(100),
    Interest4 VARCHAR(100)
);

CREATE TABLE Pictures (
    id SERIAL PRIMARY KEY,
    Pictures0 VARCHAR(100),
    Pictures1 VARCHAR(100),
    Pictures2 VARCHAR(100),
    Pictures3 VARCHAR(100),
    Pictures4 VARCHAR(100)
);

CREATE TABLE UsersProfile (
    id SERIAL PRIMARY KEY,
    Lastname  VARCHAR(100),
    Firstname  VARCHAR(100),
    Username VARCHAR(100),
    FOREIGN KEY (Username) REFERENCES Users(Username),
    Gender VARCHAR(100),
    SexualPreferences VARCHAR(255),
    Biography VARCHAR(100),
    ListOfInterest INTEGER REFERENCES ListOfInterest(id),
    Pictures INTEGER REFERENCES Pictures(id),
    FamousRating INTEGER,
    Location VARCHAR(255)
);

CREATE TABLE ProfileViews (
    id SERIAL PRIMARY KEY,
    ViewedProfile INTEGER REFERENCES UsersProfile(id),
    ViewerProfile VARCHAR(100) REFERENCES Users(Username),
    ViewDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(ViewedProfile, ViewerProfile)
    --Update view in case of review
);

CREATE TABLE LikedProfile (
    id SERIAL PRIMARY KEY,
    LikedProfile INTEGER REFERENCES UsersProfile(id),
    SenderProfile VARCHAR(100) REFERENCES Users(Username),
    ViewDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(LikedProfile, SenderProfile)
    --Update view in case of review
);
