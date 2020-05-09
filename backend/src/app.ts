import express from "express";
import passport from "passport";
import morgan from "morgan";
import * as expressSession from "express-session";
const cn = {
  host: "localhost",
  port: 5432,
  database: "guidedb",
  user: "admin",
  password: "password",
  max: 30, // use up to 30 connections
};
var pgp = require("pg-promise")(/* options */);
var db = pgp(cn);

const app = express();
app.use(morgan("dev"));
const port = 3000;

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
app.get("/login", (req, res) => {
  res.send("Login Holding text");
});
app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);
app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
