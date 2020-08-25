/**
 * Get the ID of a user or a doctor, throws error if not found. 
 *
 * @param database - The database to query
 * @param table - The table to query, only accepts "doctor" or "user"
 * @param email - The email to query
 * @returns The ID of the user or doctor from database
 */
export const getID = (database, table: "doctor" | "user", email: string): number | never => {
    let id: number;
    let sql = `SELECT id FROM ${table} WHERE email = ?`;
    database.get(sql, [email], (err, row) => {
        if (err) {
            throw err;
        }
        if (row) {
            id = row.id;
        }
        throw new Error(`No such ${table} in database.`);
    });
    return id;
}

/**
 * Validates if day number is compatible with sqlite3.
 * 
 * @remarks Day must be an integer, starting with 0 as Sunday.
 * 
 * @param day - The day number
 * @returns Boolean
 */
export const validateDayFormat = (day: number): boolean => {
    if (Number.isInteger(day) && day >= 0 && day < 7) {
        return true;
    }
    return false;
}

/**
 * Validates if time string is in HH:MM format for compatibility with sqlite3.
 * 
 * @remarks Time string must be in HH:MM format, in 24-hour format.
 *
 * @param time - The time string
 * @returns Boolean
 */
export const validateTimeFormat = (time: string): boolean => {
    const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    return time.length === 5 && regex.test(time);
}

/**
 * Validates if date string is in YYYY-MM-DD format for compatibility with sqlite3.
 *
 * @param date - The date string
 * @returns Boolean
 */
export const validateDateFormat = (date: string): boolean => {
    const regex = /20\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/;
    if (date.length != 10 || !regex.test(date)) {
        return false;
    }
    const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let dateParts = date.split("-");
    let y = parseInt(dateParts[0], 10);
    let m = parseInt(dateParts[1], 10);
    let d = parseInt(dateParts[2], 10);
    if (m == 2 && (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0))) {
        return d <= 29;
    }
    return d <= monthLength[m - 1]
}