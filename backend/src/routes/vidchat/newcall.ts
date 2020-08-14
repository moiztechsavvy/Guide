app.get("/newcall", function (req, res) {
    res.sendFile(path.join(statics, "newcall.html"));
  });