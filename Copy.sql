/* Open main database */
.open ./backend/MAINDATABASE.db

/* Create patient info table */
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
    zipcode TEXT
);

/* Add a patient */
INSERT INTO patient (email, password)
VALUES ('patient@example.com', 'patientpassword');

/* Add a doctor */
INSERT INTO doctor (email, password)
VALUES ('doctor@example.com', 'doctorpassword');
