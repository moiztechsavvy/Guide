var express = require("express");
var router = express.Router();
var passport = require("passport");

//Login routes
//Doctors
router.get("/doctor/login", (req, res) => {
  res.json({
    currently: "Doctors login here",
  });
});

router.post("/doctor/login", passport.authenticate('local-doctor-login'));

//Patients
router.get("/patient/login", (req, res) => {
  res.json({
    currently: "Patients login here",
  });
});

router.post("/patient/login", passport.authenticate('local-patient-login'));

//Signup routes
//Doctors
router.get("/doctor/signup", (req, res) => {
  res.json({
    currently: "Doctors signup here",
  });
});

router.post('/doctor/signup', passport.authenticate('local-doctor-signup'));

//Patients
router.get("/patient/signup", (req, res) => {
  res.json({
    currently: "Patients signup here",
  });
});

router.post('/patient/signup', passport.authenticate('local-patient-signup'));

//Google OAuth
// passport.authenticate middleware is used here to authenticate the request
router.get('/patient/google', passport.authenticate('google', {
  scope: ['profile'] // Used to specify the required data
}));

// The middleware receives the data from Google and runs the function on Strategy config
router.get('/patient/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/');
});

module.exports = router;
