var express = require("express");
var passport = require("passport");
var router = express.Router();
router.get("/login", (req, res) => {
    res.json({
        currently: "Patients login here",
    });
});
router.post("/login", passport.authenticate('local-patient-login'));
router.get("/signup", (req, res) => {
    res.json({
        currently: "Patients signup here",
    });
});
router.post('/signup', passport.authenticate('local-patient-signup', {
    successRedirect: '/',
    failureRedirect: '/signup'
}));
module.exports = router;
//# sourceMappingURL=patient.js.map