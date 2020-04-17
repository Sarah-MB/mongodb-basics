var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("sarah");
  dbo.collection("myMovies").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);

// MOVIES WITH STAR RATING 7
    dbo.collection("myMovies").find({}, { projection: { _id: 0, rating: 7 } }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);

// Movie title
        var query = { movie: "title" };
  dbo.collection("myMovies").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});