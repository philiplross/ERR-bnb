var db = require("../models");

var testQuestions = require("../test-data/questions.js")

module.exports = function(app) {
  // Get all examples
  app.get("/api/survey", function(req, res) {

    res.json({message: "received", questions:testQuestions})
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.json(dbExamples);
    // });
  });

  // Create a new example
  // app.post("/api/survey", function(req, res) {
  //   db.questions.create(req.body).then(function(questions) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
app.get("/api/lisiting", function(req, res) {

  res.json({message: ""})
  // db.Example.findAll({}).then(function(dbExamples) {
  //   res.json(dbExamples);
  // });
});