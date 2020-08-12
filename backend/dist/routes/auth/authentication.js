var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const bcrypt = require('bcrypt');
const sqlite = require('sqlite3').verbose();
//GOAL: Used to check if password matches the complexity and length requirements
//RETURN: true of false
const checkPasswordComplexityLength = ((password) => {
    //regex to check a password between 8 to infinity and beyond characters which contain at least one lowercase letter, 
    //one uppercase letter, one numeric digit, and one special character
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    if (password.match(regex)) {
        return true;
    }
    return false;
});
//GOAL: Used to hash password with bcrypt and store it in db
//Takes in email, password and type of user(doctor or user) and db to query
//RETURN: Promise of string "Row added"
//DISCLAIMER: THERE IS NO UNIQNESS CHECK OF EMAIL IF THE DUPLICATE SUMBITED THROWS AN ERROR
function hashAndStorePassword(email, password, type, db) {
    return new Promise((resolve, reject) => {
        const saltRounds = 15;
        bcrypt.hash(password, saltRounds).then(hash => {
            // make sure that email and hash are inside quotes otherwise db doesnt perceive them as strings and throws an error
            let sql = `INSERT INTO ${type} (email, password) VALUES (${"'" + email + "'"}, ${"'" + hash + "'"});`;
            db.run(sql, (err) => {
                if (err) {
                    reject(err);
                }
                resolve("Row added");
            });
        });
    });
}
//GOAL: Used in checkUser and fetches user password from db
//Takes in email and type of user(doctor or user) and db to query
//RETURN: Promise of password if found or undefined if user email is not in db
function fetchUserFromDB(email, type, db) {
    return new Promise((resolve, reject) => {
        let sql = `SELECT password FROM ${type} WHERE email = ?`;
        db.get(sql, [email], (err, row) => {
            if (err) {
                reject(err);
            }
            if (row) {
                resolve(row.password);
            }
            resolve(undefined);
        });
    });
}
//GOAL: Check if user password matches given password
//Takes in email, password and type of user(doctor or user) and db to query
//RETURN: Promise true if user password matches or false if the user is not in db or incorrect password
function checkUser(email, password, type, db) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //fetch user from db
            const user = yield fetchUserFromDB(email, type, db);
            if (user) {
                //compare passwords
                const match = yield bcrypt.compare(password, user);
                if (match) {
                    console.log("matches");
                    return true;
                }
                else {
                    console.log("Does not match");
                    return false;
                }
            }
            else {
                return false;
            }
        }
        catch (err) {
            console.log("We have a problem", err);
        }
    });
}
//returns promise true or false
exports.checkUser = checkUser;
//returns promise
exports.hashAndStorePassword = hashAndStorePassword;
//sync returns true or false
exports.checkPasswordComplexityLength = checkPasswordComplexityLength;
//# sourceMappingURL=authentication.js.map