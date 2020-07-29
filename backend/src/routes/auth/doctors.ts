var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var db = require("../../Database/index")
var dbfunctions = require("../../Database/functions");

//Function For Validating User Input
function validateUser(user) {
  const validEmail = typeof user.email == "string" && user.email.trim() != "";
  const validPassword =
    typeof user.password == "string" &&
    user.password.trim() != "" &&
    user.password.trim().length >= 8;

  return validEmail && validPassword;
}
//Function to validate correct email format
function emailValidator(email) {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

router.get("/login", (req, res) => {
  res.json({
    currently: "Doctors login here",
  });
});

router.post("/login", (req, res, next) => {
  //Validate User Input.
  if (validateUser(req.body)) {
    dbfunctions.searchDBforEmail(req.body.email).then((user) => {
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

router.get("/signup", (req, res) => {
    res.json({
      currently: "Doctors signup here",
    });
});

router.post("/signup", (req, res, next) => {
  if (validateUser(req.body) && emailValidator(req.body.email)) {
    dbfunctions.searchDBforEmail(req.body.email).then((user) => {
      //If user not found object is Empty
      if (user.length == 0) {
        //user is unique
        bcrypt.hash(req.body.password, 10).then((hash) => {
          const user = {
            email: req.body.email,
            password: hash,
            firstname: req.body.firstName,
            lastname: req.body.lastName,
            address: req.body.address,
            state: req.body.state,
            zipcode: req.body.zipcode,
            created_at: new Date(),
          };
          dbfunctions.createUser(user).then((response) => {
            res.json({
              response,
              currently: "✅",
            });
          });
        });
      } else {
        //Email is currently avalible in database raise Exception
        next(new Error("Email in use, Please use a unique email"));
      }
    });
  } else {
    next(new Error("Invalid user"));
  }
});

module.exports = router;