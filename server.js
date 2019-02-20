// Dependencies
var express = require("express");
var path = require("path");

// Seed data for database
var friends = require("./app/data/friends.js")

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port to use in listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.static(__dirname + '/public')); //serve images, CSS files, and JavaScript files in the app directory, to be able to load the files that are in the public directory (http://localhost:8080/data/friends.js)
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Routes
// Gives server a "map" of how to respond when users visit or request data from various URLs.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts server to listen
app.listen(PORT, function () {
  console.log("App listening on http://localhost:" + PORT);
});


