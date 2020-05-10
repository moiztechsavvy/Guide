var express = require("express");
var passport = require("passport");
var morgan = require("morgan");
var session = require("express-session");
var path = require("path");
var home = require("./routes");
var auth = require("./auth/authorization");
var bodyParser = require("body-parser");
var db = require("./Database");
const port = 5000;
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("", auth);
app.use("", home);
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
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