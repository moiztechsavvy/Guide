var express = require("express");
var router = express.Router();
var db = require("../Database");
var dbfunctions = require("../Database/functions");
router.get("/", (req, res) => {
  res.json({
    message: "Welcome to GUIDE HEALTH A cxzczPI https://guidehealth.com",
  });
});

module.exports = router;
