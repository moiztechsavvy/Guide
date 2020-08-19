var express = require("express");
var router = express.Router();
var db = require("../../Database");
var dbfunctions = require("../../Database/helperfunctions");
var inputValidation = require("../../HelperFunctions/inputValidation");
var bcrypt = require("bcrypt");
//Signup Route For Get Request.
router.get("patient/signup", (req, res) => {
    res.json({
        currently: "Nobodys signed up ",
    });
});
//Signup Request for Post Request
router.post("patient/signup", (req, res, next) => {
    if (inputValidation.validateuser(req.body)) {
        dbfunctions.searchPatientTableForValue(req.body.email).then((user) => {
            //If user not found object is Empty
            if (typeof user === "undefined") {
                //user is unique
                bcrypt.hash(req.body.password, 10).then((hash) => {
                    const user = {
                        email: req.body.email,
                        password: hash,
                        firstname: req.body.firstName,
                        lastname: req.body.lastName,
                        Address: req.body.Address,
                        state: req.body.State,
                        zipcode: req.body.ZipCode,
                        created_at: new Date(),
                    };
                    dbfunctions.createPatient(user).then((response) => {
                        res.json({
                            response,
                            currently: "✅",
                        });
                    });
                });
            }
            else {
                //Email is currently avalible in database raise Exception
                next(new Error("Email in use, Please use a Unique Email"));
            }
        });
    }
    else {
        next(new Error("Invalid user"));
    }
});
module.exports = router;
//# sourceMappingURL=signup.js.map