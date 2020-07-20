var express = require("express");
var router = express.Router();
router.get("/", (req, res) => {
    res.json({
        message: "Welcome to GUIDE HEALTH API",
    });
});
module.exports = router;
//# sourceMappingURL=index.js.map