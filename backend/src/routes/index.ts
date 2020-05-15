var express = require("express");
var router = express.Router();
var db = require("../Database");
var dbfunctions = require("../Database/functions");
router.get("/", (req, res) => {
  res.json({
    message: "Welcome to GUIDE HEALTH API https://guidehealth.com",
  });
  // dbfunctions.getallvalues().then((value) => {
  //   res.json(value);
  // });
  //Login App routes.
});

module.exports = router;
