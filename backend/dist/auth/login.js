var express = require("express");
var router = express.Router();
router.get("/login", (req, res) => {
    res.json({
        currently: "🔐",
    });
});
module.exports = router;
//# sourceMappingURL=login.js.map