// Dependencies
// var path = require("path");
// var bodyParser = require('body-parser'); //middleware module to extract the entire body portion of an incoming request stream and exposes it on req.body.

// Connect JSON file to grab array of objects
var friends = require("../data/friends.js");

// Routing 
module.exports = function (app) {

    // API get request to get friends data
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // Add friends
    app.post("/api/friends", function (req, res) {
        var match = 0;
        var difference = 0;
        var scoreArr = [];

        // capture user input and convert user score into number
        var newFriend = req.body;
        var friendName = newFriend.name;
        var friendScore = newFriend.scores;

        for (var i = 0; i < friends.length; i++) {
            difference = 0;
            for (var j = 0; j < friendScore.length; j++) {
                difference += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(friendScore[j])));
            }
            scoreArr.push(difference);
        }

        // find the best match
        for (var i = 0; i < scoreArr.length; i++) {
            if(scoreArr[i] <= scoreArr[match]) {
                match = i;
            }
        }

        // return best match
        var bestFriend = friends[match];
        res.json(bestFriend);

        // push to friends array
        friends.push(req.body);

    });
}