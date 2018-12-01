var db = require("../models");
var questions = require("../test-data/questions")

module.exports = function (app) {
  // Load index page
  // app.get("/", function (req, res) {
  //   db.Example.findAll({}).then(function (dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome to ERR bnb!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  app.get("/survey", function (req, res) {
    // db.questions.findAll({}).then(function (dbExamples) {
      // var viewObject = { questions
    

    console.log("qs ", questions);
      
      res.render("survey", {"questions":questions});
    });





  // Load example page and pass in an example by id
  app.get("/listing/:id", function (req, res) {
    db.questions.findOne({ where: { id: req.params.id } }).then(function (questions) {
      res.render("listing", {
        // example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
