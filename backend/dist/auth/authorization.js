var express = require("express");
var dbfunctions = require("../Database/functions");
var bcrypt = require("bcrypt");
var router = express.Router();
router.get("/login", (req, res) => {
    res.json({
        currently: "🔐",
    });
});
router.get("/signup", (req, res) => {
    res.json({
        currently: "Nobodys signed up fam",
    });
});
function validateuser(user) {
    const validEmail = typeof user.email == "string" && user.email.trim() != "";
    const validPassword = typeof user.password == "string" &&
        user.password.trim() != "" &&
        user.password.trim().length >= 8;
    return validEmail && validPassword;
}
router.post("/signup", (req, res, next) => {
    if (validateuser(req.body)) {
        dbfunctions.searchdbforvalue(req.body.email).then((user) => {
            //If user not found object is Empty
            if (user.length == 0) {
                //user is unique
                bcrypt.hash(req.body.password, 10).then((hash) => {
                    res.json({
                        hash,
                        currently: "✅",
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