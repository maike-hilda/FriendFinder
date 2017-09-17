// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
  
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});
  
  // Get all characters
  app.get("/all", function(req, res) {
    res.json(characters);
  });
  
  // Search for Specific Character (or all characters) - provides JSON
  app.get("/api/:characters?", function(req, res) {
    var chosen = req.params.characters;
  
    if (chosen) {
      console.log(chosen);
  
      for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
          return res.json(characters[i]);
        }
      }
      return res.json(false);
    }
    return res.json(characters);
  });
  
  // Create New Characters - takes in JSON input
  app.post("/api/new", function(req, res) {
    var newcharacter = req.body;
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newcharacter);
  
    characters.push(newcharacter);
  
    res.json(newcharacter);
  });