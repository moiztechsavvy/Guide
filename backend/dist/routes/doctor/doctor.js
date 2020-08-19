var express = require("express");
var router = express.Router();
var dbfunctions = require("../../Database/helperfunctions");
var helperfunctions = require("../../HelperFunctions/inputValidation");
//GEts the id from database and returns the json object
router.get("/:id", helperfunctions.ensureLoggedIn, helperfunctions.ensureAuthorized, (req, res, next) => {
    dbfunctions.searchPatientTableForId(req.params.id).then((value) => {
        res.json(value);
    });
    //Login App routes.
});
module.exports = router;
//# sourceMappingURL=doctor.js.map