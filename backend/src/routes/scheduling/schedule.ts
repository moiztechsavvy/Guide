const sqlite = require('sqlite3').verbose();
import utils = require('../../HelperFunctions/schedulingHelperFunctions');

interface Schedule {
    day_of_week: number, 
    available_from: string,
    available_to: string,
    break_from?: string | null,
    break_to?: string | null
}

/**
 * Validates if time schedule is in correct format.
 *
 * @param time - The time string
 * @returns Boolean
 */
const validateSchedule = (s: Schedule): boolean => {
    return utils.validateDayFormat(s.day_of_week) &&
        utils.validateTimeFormat(s.available_from) &&
        utils.validateTimeFormat(s.available_to) &&
        (s.break_from == undefined || utils.validateTimeFormat(s.break_from)) &&
        (s.break_to == undefined || utils.validateTimeFormat(s.break_to))
}

/**
 * Create or replace schedule of a doctor on the specified day. 
 *
 * @param database - The database to query
 * @param email - The doctor email
 * @param schedule - The day schedule
 * @returns Promise
 */
export const createOrReplaceSchedule = (database, email: string, schedule: string) => {
    return new Promise((resolve, reject) => {
        try {
            let id = utils.getID(database, 'doctor', email);
            let s: Schedule = JSON.parse(schedule);
            if (!validateSchedule(s)) {
                throw new Error("Schedule is in wrong format.")
            }
            let sql = `
                REPLACE INTO schedule (doctor_id, day_of_week, available_from, available_to, break_from, break_to)
                VALUES (?, ?, ?, ?, ?, ?)
            `;
            let params = [id, s.day_of_week, s.available_from, s.available_to, s.break_from, s.break_to]
            database.run(sql, params, (err) => {
                if (err) {
                    throw err;
                }
            });
            resolve("Schedule successfully update.");
        } catch (err) {
            reject(err);
        }
    })
}

/**
 * Create or replace schedule of a doctor on multiple days. 
 *
 * @param database - The database to query
 * @param email - The doctor email
 * @param schedules - Array of day schedules
 * @returns Promise
 */
export const createOrReplaceSchedules = (database, email: string, schedules: string) => {
    return new Promise((resolve, reject) => {
        try {
            let id = utils.getID(database, 'doctor', email);
            let schedule_array: Array<Schedule> = JSON.parse(schedules);
            for (let s of schedule_array) {
                if (!validateSchedule(s)) {
                    throw new Error("Schedule is in wrong format.")
                }
            }
            let sql = `
                REPLACE INTO schedule (doctor_id, day_of_week, available_from, available_to, break_from, break_to)
                VALUES (?, ?, ?, ?, ?, ?)
            `;
            for (let s of schedule_array) {
                let params = [id, s.day_of_week, s.available_from, s.available_to, s.break_from, s.break_to]
                database.run(sql, params, (err) => {
                    if (err) {
                        throw err;
                    }
                });
            }
            resolve("Schedule successfully update.");
        } catch (err) {
            reject(err);
        }
    })
}

/**
 * Get schedule of a doctor in database for a specified week day.
 *
 * @param database - The database to query
 * @param email - The doctor email
 * @param dayOfWeek - The week day
 * @returns JSON of the schedule
 */
export const getDaySchedule = (database, email: string, dayOfWeek: number) => {
    return new Promise((resolve, reject) => {
        try {
            let id = utils.getID(database, "doctor", email);
            if (!utils.validateDayFormat(dayOfWeek)) {
                throw new Error("Day of week is in wrong format.")
            }
            let sql = `SELECT day_of_week, available_from, available_to, break_from, break_to 
                       FROM schedule 
                       WHERE id = ? AND day_of_week = ?`;
            database.get(sql, [id, dayOfWeek], (err, row) => {
                if (err) {
                    throw err;
                }
                if (row) {
                    resolve(JSON.stringify(row));
                }
            })
        } catch (err) {
            reject(err);
        }
    })
}

/**
 * Get schedule of a doctor in database for the week.
 *
 * @param database - The database to query
 * @param email - The doctor email
 * @returns JSON of the schedule
 */
export const getWeekSchedule = (database, email: string) => {
    return new Promise((resolve, reject) => {
        try {
            let schedules: Array<Schedule>;
            let id = utils.getID(database, "doctor", email);
            let sql = `SELECT day_of_week, available_from, available_to, break_from, break_to 
                       FROM schedule 
                       WHERE id = ?`;
            database.each(sql, [id], (err, row) => {
                if (err) {
                    throw err;
                }
                if (row) {
                    schedules.push(row);
                }
            });
            resolve(JSON.stringify(schedules));
        } catch (err) {
            reject(err);
        }
    })
}