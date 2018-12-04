var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/survey", function (req, res) {
    db.questions.create(req.body).then(function (questions) {
      res.json(questions);
    });
  });

  app.post("/api/results",(req, res, next) =>{
    return res.json(req.body)
  })
}