app.get("/join/", function (req, res) {
    res.redirect("/");
  });
  
app.get("/join/*", function (req, res) {
if (Object.keys(req.query).length > 0) {
    console.log("redirect:" + req.url + " to " + url.parse(req.url).pathname);
    res.redirect(url.parse(req.url).pathname);
} else {
    res.redirect("/");
    //res.sendFile(path.join(statics, "chat.html"));
}
});