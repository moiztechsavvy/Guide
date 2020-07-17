var express = require("express");
var router = express.Router();

var sqlite3 = require("sqlite");
import { open } from "sqlite";
(async () => {
  // open the database
  const db = await open({
    filename: "../database/database.db",
    driver: sqlite3.Database,
  });
})();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to GUIDE HEALTH A cxzczPI https://guidehealth.com",
  });
});

module.exports = router;
