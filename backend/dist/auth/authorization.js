var express = require("express");
var router = express.Router();
var dbfunctions = require("../Database/functions");
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
        let returned = dbfunctions
            .searchdbforvalue(req.body.email)
            .then((userdata) => {
            console.log(userdata);
            res.json({
                userdata,
                currently: "✅",
            });
        });
    }
    else {
        next(new Error("Invalid user"));
    }
});
// app.post(
//   "/login",
//   passport.authenticate("local", { failureRedirect: "/login" }),
//   function (req, res) {
//     res.redirect("/");
//   }
// );
module.exports = router;
//# sourceMappingURL=authorization.js.map