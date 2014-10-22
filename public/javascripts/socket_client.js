(function () {
  var SocketClient = {
    socket: io.connect(),

    getData: function () {
      this.socket.on("reserve", function (data) {
      });
    }
  };

  window.SocketClient = SocketClient;
})();
