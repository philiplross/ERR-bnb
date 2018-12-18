require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
// var fs = require('fs');


var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;


// app.get('/', function(request, response) {
//   var tweets = fs.readFileSync('/index.html').toString();
//   response.send(tweets);



//   var tweetIt = function(neighborhood){

//     //Tweet Tweet Make This Global aka first.
//     var Twitter = require('twitter');
//     //Make this global aka first.
//     var client = new Twitter({
//         consumer_key: 'CSJvSoGmLJt8yie3a7g8RMfPM',
//         consumer_secret: 'ZwDoLhQ6hTevtcxSvXPWnn6ZyXQm2f3gBoRL95ofWYyxB5cFLE',
//         access_token_key: '1018728385-nIiGtiNBNFFWFQFAONdlGWiKhwtNLHKDzClryxp',
//         access_token_secret: '7ObeDoMcfHCZ2NlRd0EoXtkJl9iP3HdxzNYuBHafZYYwM'
//     });
//     //Put this in an app.get request. Tell it where to place the results on an endpoint.
//     var params = {screen_name: 'node.js'};
//     client.get('search/tweets.json?q=nasa', {q: neighborhood}, function(error, tweets, response) {
//         if (!error) {
//             console.log(tweets);
//         }
//         return res.json(tweets);
//     });
//     };




//     function tubeIt(neighborhood = 'North Park') {
//       var encodedURI = encodeURI(neighborhood);
//       console.log("encoded URI ", encodedURI);
//       $.ajax({
//           url: "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBU3AMbULUTX2MHThg4EzAQ8MiIF0AU0JI&q=" + encodedURI + "San Diego",
//           method: 'GET'
//       })
//           .done(function player(results) {
//               console.log("results.items from YouTube api: ", results.items);
//               var videos = results.items;
//               for (i = 0; i < videos.length; i++) {
//                   $('.ylist').append('<li><iframe id="player" type="text/html" width="640" height="390"   src="https://www.youtube.com/embed/' + videos[i].id.videoId + '?enablejsapi=1" frameborder="0"></iframe></li>')
//               }
//           });
//   }





// });
// app.listen(3000, () => console.log('app listening on port 3000!'));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
