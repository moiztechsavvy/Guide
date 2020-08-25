/* Open main database */
.open ./backend/MAINDATABASE.db

/* Create user info table */
CREATE TABLE IF NOT EXISTS user (
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
    zipcode TEXT
);

/* Create doctor schedule table */
CREATE TABLE IF NOT EXISTS schedule (
    doctor_id INTEGER NOT NULL,
    day_of_week INTEGER NOT NULL, 
    available_from TEXT,
    break_from TEXT,
    break_to TEXT,
    available_to TEXT,
    PRIMARY KEY (doctor_id, day_of_week),
    FOREIGN KEY (doctor_id) REFERENCES doctor (id)
);

/* Create appointment table */
CREATE TABLE IF NOT EXISTS appointment(
    id INTEGER PRIMARY KEY,
    doctor_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL, 
    scheduled_from TEXT NOT NULL,
    scheduled_to TEXT NOT NULL,
    actual_from TEXT, 
    actual_to TEXT,
    cancelled INTEGER NOT NULL,
    FOREIGN KEY (doctor_id) REFERENCES doctor (id),
    FOREIGN KEY (user_id) REFERENCES user (id)
);

/* Add a user */
INSERT INTO user (email, password)
VALUES ('user@example.com', 'userpassword');

/* Add a doctor */
INSERT INTO doctor (email, password)
VALUES ('doctor@example.com', 'doctorpassword');

/* Add a doctor schedule */
INSERT INTO schedule (doctor_id, day_of_week, available_from, available_to)
VALUES (1, 1, '09:00', '17:00');

/* Add an appointment */
INSERT INTO appointment (doctor_id, user_id, scheduled_from, scheduled_to, cancelled)
VALUES (1, 1, '09:00', '10:00', 0);