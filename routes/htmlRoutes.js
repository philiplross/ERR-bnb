var db = require("../models");

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
  app.get("/", (req, res, next) => {
    db.questions.findAll({}).then(questionFoundFromDb => {
      res.render("index", {
        questions: questionFoundFromDb,
        props:["1,2,3",{name: "yolo"}]
      })
    }).catch(next)
  })

  app.get("/survey", function (req, res) {
    db.questions.findAll({}).then(function (dbExamples) {
      var viewObject = {
        questions
        // questions: questionOne,
        //  questionTwo,
        //   questionThree,
        //    questionFour,
        //    questionFive,
        //     questionSix,
        //     questionSeven,
        //      questionEight,
        //      questionNine,
        //       questionTen
      }
      res.render("survey", viewObject);
    });
  });





  // Load example page and pass in an example by id
  app.get("/listing/:id", function (req, res) {
    db.questions.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (questions) {
      res.render("listing", {
        // example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

  app.use((err, req, res, next) => {
    console.log(err)
  })
};