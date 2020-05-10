var express = require("express");
var router = express.Router();
var db = require("../Database");
var dbfunctions = require("../Database/functions");
router.get("/", (req, res) => {
  dbfunctions.getallvalues().then((value) => {
    res.json(value);
  });
  //Login App routes.
});

module.exports = router;
