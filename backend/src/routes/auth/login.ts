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

      if (user.length !== "undefined") {
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
              //true, secure in Production
            });
            res.json({
              userId: user[0].id,
              currently: "You're Logged In 🔓",
            });
          } else {
            //Passwords Didn't Match
            next(new Error("Invalid Login"));
          }
        });
      } else {
        //Email Didn't Match
        next(new Error("Invalid Login"));
      }
    });
  } else {
    //Input was wrong
    next(new Error("Invalid Login"));
  }
});

function ensureLoggedIn(req, res, next) {
  console.log(req.signedCookies);
  if (req.signedCookies.user_id) {
    next();
  } else {
    res.status(401);
    next(new Error("Unauthorized"));
  }
}

module.exports = {
  ensureLoggedIn,
};

router.get("/:id", (req, res) => {
  dbfunctions.searchDBforId(req.params.id).then((value) => {
    res.json(value);
  });
  //Login App routes.
});

module.exports = router;
