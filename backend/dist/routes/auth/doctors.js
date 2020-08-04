var express = require("express");
var passport = require("passport");
var router = express.Router();
router.get("/login", (req, res) => {
    res.json({
        currently: "Doctors login here",
    });
});
router.post("/login", passport.authenticate('local-doctor-login'));
router.get("/signup", (req, res) => {
    res.json({
        currently: "Doctors signup here",
    });
});
router.post('/signup', passport.authenticate('local-doctor-signup', {
    successRedirect: '/',
    failureRedirect: '/signup'
}));
module.exports = router;
//# sourceMappingURL=doctors.js.map