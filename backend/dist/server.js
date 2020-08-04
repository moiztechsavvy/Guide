//Libraries
var express = require("express");
var passport = require("passport");
var morgan = require("morgan");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var path = require("path");
var cors = require("cors");
var bodyParser = require("body-parser");
require("dotenv").config();
//Self Created Modules
var home = require("./routes");
var models = require("./models/index");
var auth = require("./routes/auth/login");
const port = 5000;
const app = express();
app.use(morgan("dev"));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser(process.env.SECRET_COOKIE));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport, models.doctor, models.patient);
// //Sync Database
// models.sequelize.sync().then(function() {
//   console.log('Nice! Database looks fine')
// }).catch(function(err) {
//   console.log(err, "Something went wrong with the Database Update!")
// });
// API routes Defined Here.
app.use("", home);
app.use("/auth", auth);
//Send Back Error Response.
app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({
        message: err.message,
        error: req.app.get("env") === "development" ? err : {},
    });
});
// App Listening
app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=server.js.map