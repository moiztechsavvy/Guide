"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const morgan_1 = __importDefault(require("morgan"));
const cn = {
    host: "localhost",
    port: 5432,
    database: "guidedb",
    user: "admin",
    password: "password",
    max: 30,
};
var pgp = require("pg-promise")( /* options */);
var db = pgp(cn);
const app = express_1.default();
app.use(morgan_1.default("dev"));
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
app.post("/login", passport_1.default.authenticate("local", { failureRedirect: "/login" }), function (req, res) {
    res.redirect("/");
});
app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map