// Routes
var friends = require("../data/friends");

// friends JSON
module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
    res.json(friends);
});
  
// add friends
app.post("/api/friends", function(req, res) {
    var bestie = {
        name: "",
        photo: "",
        difference: 1000
    };

    var userData = req.body;
    var userScores = userData.scores;

    // store the friend's differnce in choices
    var totalDiff;

    // loop through all friends
    for (var i = 0; i < friends.length; i++) {
        var currentFriend = friends[i];
        totalDiff = 0;

        // loop through friend's survey results
        for (var j = 0; j < currentFriend.scores.length; j++) {
            var currentFriendScore = currentFriend.scores[j]; // potential friend's score
            var currentUserScore = userScores[j]; // user's score for that question

            totalDiff += Math.abs(parseInt(currentFriendScore) - parseInt(currentUserScore));
        }

        if (totalDiff <= bestie.difference) {
            bestie.name = currentFriend.name;
            bestie.photo = currentFriend.photo;
            bestie.difference = totalDiff;
        }
    }

    friends.push(userData);

    res.json(bestMatch);
});
}

//module.exports = app;
