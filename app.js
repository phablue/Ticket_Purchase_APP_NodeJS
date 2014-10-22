var path = require("path");
var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

var seats = [];

app.set("views", path.join(__dirname, "views"));

app.use(express.Router());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile();
});

app.get("/seats", function (req, res) {
  res.sendFile();
});

server.listen(3000, function () {
  console.log("Server Running at http://localhost:3000/");
});

io.on("connection", function (socket) {

});
