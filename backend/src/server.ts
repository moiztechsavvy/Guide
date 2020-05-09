var express = require("express");
var passport = require("passport");
var morgan = require("morgan");
var pgp = require("pg-promise")(/* options */);
var session = require("express-session");
var path = require("path");
//var allusers = require("./routes");
var auth = require("./auth/authorization");

require("dotenv").config();
const cn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  max: 30, // use up to 30 connections
};
var db = pgp(cn);
const port = 5000;
const app = express();
app.use(morgan("dev"));
app.use("", auth);
// app.use("", allusers);

//app.use(cors);

//Home Page routes.

app.get("/", (req, res) => {
  db.any("SELECT * FROM users", [true])
    .then(function (data) {
      // success;
      res.send(data);
    })
    .catch(function (error) {
      // error;
    });

  //Login App routes.
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
