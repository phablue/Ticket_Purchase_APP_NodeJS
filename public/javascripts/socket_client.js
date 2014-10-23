(function () {
  var SocketClient = {
    socket: io.connect(),

    getData: function () {
      this.socket.on("reserve", function (data) {
      });
    },

    setData: function (seat, line) {
      this.socket.emit("reserve", {x: seat, y: line});
    }
  };

  window.SocketClient = SocketClient;
})();
