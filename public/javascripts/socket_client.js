(function () {
  var SocketClient = {
    socket: io.connect(),

    getData: function () {
      this.socket.on("reserve", function (data) {
      });
    },

    setChosenData: function (seat, line) {
      this.socket.emit("choice", {x: seat, y: line});
    },

    setPurchasedData: function (seat, line) {
      this.socket.emit("purchase", {x: seat, y: line});
    }
  };

  window.SocketClient = SocketClient;
})();
