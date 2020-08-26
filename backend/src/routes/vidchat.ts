/* vidchat.ts
* A file that gathers all the DVC's frontend app routes into one place.
* NOTE: The backend routes and socketio handling are in server.ts
* Disclaimer: This code adds the following routes to the API, which might not be the desired presentation.
*/

var express = require('express');
var router = express.Router();
var path = require('path');
var statics = 'http://localhost:3000/'; // Location of statics folder goes here

router.get("/join/", function (req, res) {
    res.redirect("http://localhost:3000/newcall.html");
  });
  
router.get("/join/*", function (req, res) {
if (Object.keys(req.query).length > 0) {
    console.log("redirect:" + req.url + " to " + url.parse(req.url).pathname);
    res.redirect(url.parse(req.url).pathname);
} else {
    //res.redirect("/");
    res.redirect("http://localhost:3000/chat.html");
}
});

router.get("/notsupported", function (req, res) {
    res.redirect("http://localhost:3000/notsupported.html");
  });
  
router.get("/notsupportedios", function (req, res) {
    res.redirect("http://localhost:3000/notsupportedios.html");
  });
router.get("/newcall", function (req, res) {
    res.redirect("http://localhost:3000/newcall.html");
  });

  module.exports = router;