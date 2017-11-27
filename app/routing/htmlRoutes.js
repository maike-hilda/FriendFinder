// Routes
var path = require("path");

module.exports = function (app) {
  // Route to survey
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // Basic route to home
  app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

  // Redirect everything to home
  app.get("*", function(req, res) {
    res.redirect("/");
  });
}

//module.exports = app;

  
 