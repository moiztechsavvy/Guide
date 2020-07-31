var express = require("express");
var router = express.Router();
var db = require("../../Database/index");
var dbfunctions = require("../../Database/functions");
var authentication = require("./authentication");
var bcrypt = require('bcrypt');
router.get("/login", (req, res) => {
    res.json({
        currently: "Patiens login here",
    });
});
router.post("/login", (req, res, next) => {
    //Validate User Input.
    if (validateUser(req.body)) {
        let user = dbfunctions.searchDBforPatientEmail(req.body.email);
        //If user is found in the database.
        if (user != null) {
            //compare password with Hashed Password
            //throws error in console, sets result to true regardless
            let result = bcrypt.compare(req.body.password, user.password);
            //If Passwords Matched.
            if (result) {
                const isSecure = req.app.get("env") != "development";
                //Setting the 'set-cookie' header
                res.cookie("user_id", user.id, {
                    httpOnly: true,
                    signed: true,
                    secure: isSecure,
                });
                res.json({
                    userId: user.id,
                    currently: "You're Logged In 🔓",
                });
            }
            else {
                //Passwords Didn't Match
                next(new Error("Invalid Login"));
            }
        }
        else {
            //Email Didn't Match
            next(new Error("Invalid Login"));
        }
    }
    else {
        //Input was wrong
        next(new Error("Invalid Login"));
    }
});
router.get("/signup", (req, res) => {
    res.json({
        currently: "Patients signup here",
    });
});
router.post("/signup", (req, res, next) => {
    if (validateUser(req.body) && emailValidator(req.body.email)) {
        let user = dbfunctions.searchDBforPatientEmail(req.body.email);
        //Still crashes if you enter an email that is not unique
        if (user == null) {
            //user is unique
            const hash = bcrypt.hash(req.body.password, 10);
            const newuser = {
                email: req.body.email,
                password: hash,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                address: req.body.address,
                state: req.body.state,
                zipcode: req.body.zipcode,
                created_at: new Date(),
            };
            let response = dbfunctions.createPatient(newuser);
            res.json({
                response,
                currently: "✅",
            });
        }
        else {
            //Email is currently avalible in database raise Exception
            next(new Error("Email in use"));
        }
    }
    else {
        next(new Error("Invalid user"));
    }
});
module.exports = router;
//# sourceMappingURL=patient.js.map