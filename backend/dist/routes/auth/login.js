var express = require("express");
var router = express.Router();
router.get("/login", (req, res) => {
    res.json({
        currently: "Nobodys signed up fam",
    });
});
router.post("/login", (req, res, next) => {
    if (req.body.user.length > 0) {
        res.json({
            message: "Looks good, I guess",
        });
    }
    else {
        //Email Didn't Match
        next(new Error("Invalid Login"));
    }
});
module.exports = router;
//# sourceMappingURL=login.js.map