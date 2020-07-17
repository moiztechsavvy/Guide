"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var sqlite3 = require("sqlite");
const sqlite_1 = require("sqlite");
(() => __awaiter(this, void 0, void 0, function* () {
    // open the database
    const db = yield sqlite_1.open({
        filename: "../database/database.db",
        driver: sqlite3.Database,
    });
}))();
router.get("/", (req, res) => {
    res.json({
        message: "Welcome to GUIDE HEALTH A cxzczPI https://guidehealth.com",
    });
});
module.exports = router;
//# sourceMappingURL=index.js.map