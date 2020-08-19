/* Open main database */
.open ./backend/MAINDATABASE.db

/* Create user info table */
CREATE TABLE IF NOT EXISTS patient (
    id INTEGER PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at TEXT,
    firstname TEXT,
    lastname TEXT,
    address TEXT, 
    state TEXT,
    zipcode TEXT
);

/* Create doctor info table */
CREATE TABLE IF NOT EXISTS doctor (
    id INTEGER PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at TEXT,
    firstname TEXT,
    lastname TEXT,
    address TEXT, 
    state TEXT,
    zipcode TEXT,
    place_id TEXT
);

/* Add a user */
INSERT INTO user (email, password)
VALUES ('user@example.com', 'userpassword');

/* Add a doctor */
INSERT INTO doctor (email, password)
VALUES ('doctor@example.com', 'doctorpassword');
