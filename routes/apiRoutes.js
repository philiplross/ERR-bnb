var db = require("../models");

var testQuestions = [
  "What is your budget for this trip?",
  "Do you like staying alone, or enjoy the livelyness of a bed and breakfast?",
  "Would you rather wake up to the sights of the ocean or not a deal breaker?",
 "when traveleing somewhere, whats the first thing you do when you get there?",
 "Would you say this trip you wanna be a foodie, or stick to a diet and get some excerise?",
 "when you stay somewhere whats more inportant, artistic & history, or comnfort & ritz?",
 "How amny people are you bringing on this trip or is it just Yourself?",
 "What dates are you planning to travel?",
 "What is inportant to have close by in your neighborhood experience?"
]
module.exports = function(app) {
  // Get all examples
  app.get("/api/survey", function(req, res) {

    res.json({message: "received"})
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
