var express = require("express");
var router = express.Router();
var db = require("../../Database/index");
var dbfunctions = require("../../Database/functions");
var authentication = require("./authentication");
var bcrypt = require('bcrypt');
//Function For Validating User Input
function validateUser(user) {
    const validEmail = authentication.emailValidator(user.email);
    const validPassword = authentication.checkPasswordComplexityLength(user.password);
    return validEmail && validPassword;
}
router.get("/login", (req, res) => {
    res.json({
        currently: "Doctors login here",
    });
});
router.post("/login", (req, res, next) => {
    //Validate User Input.
    if (validateUser(req.body)) {
        if (authentication.checkUser(req.email, req.password, "doctor", db)) {
            let user = dbfunctions.searchDBforDoctorEmail(req.body.email);
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
            //user not found or email/password incorrect
            next(new Error("Invalid Login"));
        }
    }
    else {
        //email or password failed complexity
        next(new Error("Invalid Login"));
    }
});
router.get("/signup", (req, res) => {
    res.json({
        currently: "Doctors signup here",
    });
});
router.post("/signup", (req, res, next) => {
    if (validateUser(req.body)) {
        if (!(authentication.checkUser(req.email, req.password, "doctor", db))) {
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
                created_at: new Date()
            };
            let response = dbfunctions.createDoctor(newuser);
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
//# sourceMappingURL=doctors.js.map