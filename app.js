var jade = require("jade");
var path = require("path");
var mysql = require("mysql");
var client = mysql.createConnection({user: "root", password: "root", database: "Movie_Theater"});
var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.locals._ = require('underscore');
app.locals.moment = require("moment");

app.use(express.Router());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  client.query("select * from movies", function (err, movies) {
    if (err) throw err;
    client.query("select * from movie_showing", function (err, movie_showing) {
      if (err) throw err;
      res.render("movies", {
        movies: movies,
        movie_showing: movie_showing });
    });    
  });
});

app.get("/selectseat/:id/:date/:time", function (req, res, next) {
  client.query("select seats from movie_showing where movie_id = ? and show_date = ? and show_time = ?",
    [req.param("id"), req.param("date"), req.param("time")]
    , function (err, result) {
      if (err) throw err;
      res.render("seats", {movie_seats: result[0].seats}); 
    });
});

server.listen(3000, function () {
  console.log("Server Running at http://localhost:3000/");
});

io.on("connection", function (socket) {
  socket.on("purchase", function (data) {
    seats[data.y][data.x] = 3;
    io.sockets.emit("reserve", data);
  });

  socket.on("reserve", function (data) {
    seats[data.y][data.x] = 2;
    io.sockets.emit("reserve", data);
  });

  socket.on("cancel", function (data) {
    seats[data.y][data.x] = 1;
    io.sockets.emit("reserve", data);
  });
});
