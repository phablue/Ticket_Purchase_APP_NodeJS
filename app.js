var jade = require("jade");
var path = require("path");
var mysql = require("mysql");
var client = mysql.createConnection({user: "root", password: "root", database: "Movie_Theater"});
var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

var seats = [
  [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.Router());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  client.query("select * from movies", function (err, result) {
    if (err) throw err;
    res.render("movies", {movies: result});
  });
});

app.get("/seats", function (req, res) {
  res.send(seats);
});

app.get("/selectseat", function (req, res) {
  res.render('seats');
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
