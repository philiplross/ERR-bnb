var db = require("../models");
var questions = require("../test-data/questions");

module.exports = function (app) {
app.get("/survey", function (req, res){
  res.render("/index")
})

  app.get("/survey", function (req, res) {
    return res.render("survey")
  })
  // Load example page and pass in an example by id
  app.get("/listing", function (req, res) {
    res.render("listing")
  })
  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.status(404).render("404")
  })
}