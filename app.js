var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

app.use(express.Router());

app.get("/", function (req, res) {
  res.sendFile();
});

app.get("/seats", function (req, res) {
  res.sendFile();
});

server.listen(3000, function () {
  console.log("Server Running at http://localhost:3000/");
});

