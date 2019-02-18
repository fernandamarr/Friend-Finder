// Dependencies 
// Path package to get the correct file path for html
var path = require("path");

module.exports = function(app) {

    // Route to survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(_dirname, "/../public/survey.html"))
    })

    // Default to home if no matching route is found
    app.get(function(req,res) {
        res.sendFile(path.join(_dirname, "/../public/home.html"))
    })
}