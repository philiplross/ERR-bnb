var db = require("../models");

var testQuestions = require("../test-data/questions.js")

//Tweet Tweet Make This Global aka first.
var Twitter = require('twitter');
//Make this global aka first.
var client = new Twitter({
    consumer_key: 'CSJvSoGmLJt8yie3a7g8RMfPM',
    consumer_secret: 'ZwDoLhQ6hTevtcxSvXPWnn6ZyXQm2f3gBoRL95ofWYyxB5cFLE',
    access_token_key: '1018728385-nIiGtiNBNFFWFQFAONdlGWiKhwtNLHKDzClryxp',
    access_token_secret: '7ObeDoMcfHCZ2NlRd0EoXtkJl9iP3HdxzNYuBHafZYYwM'
});


module.exports = function (app) {
  // Get all examples
  app.get("/api/survey", function (req, res) {

    res.json({ message: "received", questions: testQuestions })
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
  app.get("/api/lisiting", function (req, res) {
    res.json({ message: "" })
  });

  app.get('/tweet/:neighborhood', function(req, res) {
    var neighborhood = req.params.neighborhood;
    client.get('search/tweets.json?q=nasa', {q: neighborhood}, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
        return res.json(tweets);
    });
  });



};













