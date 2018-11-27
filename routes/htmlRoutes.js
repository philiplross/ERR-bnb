var db = require("../models");


module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome to ERR bnb!",
        text: "The premiere travel destination selector. All you need to do in fill out a short survey with your budget and what you like, and the app does the rest.",
        text: "Below please answer in the following questions and we will help choose your perfect",

      });
    });
  });

  app.get("/survey", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      var viewObject = {
        questions: questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen
      }
      res.render("survey", viewObject);
    });
  });




  // loading our rental listing that was selected for listing page
  app.get("/listing/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("listing", {
        title: title,
        budget: budget,
        dates: dates,
        details: details

      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
