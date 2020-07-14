//Libraries
var express = require("express");
var passport = require("passport");
var morgan = require("morgan");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var path = require("path");
const cors = require("cors");
var bodyParser = require("body-parser");
require("dotenv").config();
//Self Created Modules.
var home = require("./routes");
var auth = require("./routes/auth/authorization");
var userHome = require("./routes/user/userhome");
var authMiddleware = require("./routes/auth/middleware");
//DataBase Connection.
var db = require("./Database");
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
app.use("/auth", auth);
app.use("", home);
app.use("/user", authMiddleware.ensureLoggedIn, userHome);
//
app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({
        message: err.message,
        error: req.app.get("env") === "development" ? err : {},
    });
});
app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=server.js.map