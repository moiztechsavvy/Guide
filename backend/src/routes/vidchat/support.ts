app.get("/notsupported", function (req, res) {
    res.sendFile(path.join(statics, "notsupported.html"));
  });
  
  app.get("/notsupportedios", function (req, res) {
    res.sendFile(path.join(statics, "notsupportedios.html"));
  });