// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Seed data for database
// var friends = require("./app/data/friends.js")

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port to use in listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.text());

// Routes
// Gives server a "map" of how to respond when users visit or request data from various URLs.
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// Listener - "starts" server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });