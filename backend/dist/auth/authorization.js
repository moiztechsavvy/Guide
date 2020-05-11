var express = require("express");
var dbfunctions = require("../Database/functions");
var bcrypt = require("bcrypt");
var router = express.Router();
//Function For Validating User Input
function validateuser(user) {
    const validEmail = typeof user.email == "string" && user.email.trim() != "";
    const validPassword = typeof user.password == "string" &&
        user.password.trim() != "" &&
        user.password.trim().length >= 8;
    return validEmail && validPassword;
}
router.get("/login", (req, res) => {
    res.json({
        currently: "🔐",
    });
});
var router = express.Router();
router.post("/login", (req, res, next) => {
    //Validate User Input.
    if (validateuser(req.body)) {
        dbfunctions.searchdbforvalue(req.body.email).then((user) => {
            //If user us found in the database.
            if (user.length > 0) {
                //compare password with Hashed Password
                bcrypt.compare(req.body.password, user[0].password).then((result) => {
                    //If Passwords Matched.
                    if (result) {
                        const isSecure = req.app.get("env") != "development";
                        //Setting the 'set-cookie' header
                        res.cookie("user_id", user[0].id, {
                            httpOnly: true,
                            signed: true,
                            secure: isSecure,
                        });
                        res.json({
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
router.get("/signup", (req, res) => {
    res.json({
        currently: "Nobodys signed up fam",
    });
});
router.post("/signup", (req, res, next) => {
    if (validateuser(req.body)) {
        dbfunctions.searchdbforvalue(req.body.email).then((user) => {
            //If user not found object is Empty
            if (user.length == 0) {
                //user is unique
                bcrypt.hash(req.body.password, 10).then((hash) => {
                    const user = {
                        email: req.body.email,
                        password: hash,
                        name: req.body.name,
                        created_at: new Date(),
                    };
                    dbfunctions.createUser(user).then((response) => {
                        res.json({
                            response,
                            currently: "✅",
                        });
                    });
                });
            }
            else {
                //Email is currently avalible in database raise Exception
                next(new Error("Email in use"));
            }
        });
    }
    else {
        next(new Error("Invalid user"));
    }
});
module.exports = router;
//# sourceMappingURL=authorization.js.map