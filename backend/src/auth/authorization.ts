var express = require("express");
var router = express.Router();

router.get("/login", (req, res) => {
  res.json({
    currently: "🔐",
  });
});

router.get("/signup", (req, res) => {
  res.json({
    currently: "Nobodys signed up fam",
  });
});
function validateuser(user) {}
router.post("/signup", (req, res) => {
  res.json({
    currently: "✅",
  });
});
// app.post(
//   "/login",
//   passport.authenticate("local", { failureRedirect: "/login" }),
//   function (req, res) {
//     res.redirect("/");
//   }
// );
module.exports = router;
