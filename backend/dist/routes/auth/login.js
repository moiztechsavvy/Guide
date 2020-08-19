var express = require("express");
var router = express.Router();
var dbfunctions = require("../../Database/helperfunctions");
var helperfunctions = require("../../HelperFunctions/inputValidation");
var bcrypt = require("bcrypt");
router.get("/login", (req, res) => {
    res.json({
        currently: "🔐",
    });
});
router.post("/login", (req, res, next) => {
    //Validate User Input.
    if (helperfunctions.validateuser(req.body)) {
        dbfunctions.searchPatientTableForValue(req.body.email).then((user) => {
            //If user us found in the database.
            if (user !== "undefined") {
                //compare password with Hashed Password
                bcrypt.compare(req.body.password, user.password).then((result) => {
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
                });
            }
            else {
                //Email Didn't Match
                next(new Error("Invalid Login"));
            }
        });
    }
    else {
        //Input was wrong
        next(new Error("Invalid Login"));
    }
});
module.exports = router;
//# sourceMappingURL=login.js.map