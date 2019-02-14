// Load data
// Link route to a series of data sources which hold array of information
var friendsData = require("../data/friends.js");

// Routing 
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    })

    // Post request to handle incoming survey results and compatability logic
    app.post("/api/friends", function (req, res) {
        //compatability logic goes here
    })
}