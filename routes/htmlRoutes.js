var db = require("../models");

module.exports = function (app) {

  app.get("/survey", function (req, res) {
    var viewObject = {
      questions: [
        {
          text: "please choose the type of dwelling you would like to stay in",
          choices: JSON.parse("[\"Entire-home/apt\", \"Private room\", \"Shared room\"]")
        },
        {
          text: "What type of neighborhood would you like to stay in?",
          choices: JSON.parse("[\"by_the_beach\", \"downtown/city\", \"Suburban_ and_Safe\"]")
        },
        {
          text: "What is your price point",
          choices: JSON.parse("[\"Under_100\", \"Under_200\", \"Under_300\",\"any\"]")
        },

      ],
    }
    res.render("survey", viewObject);
  });
     app.get("*", function (req, res) {
     res.render("404");
     });
  
   app.use((err, req, res, next) => {
       console.log(err)
   })

  }