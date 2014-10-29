(function () {
  var SocketClient = {
    socket: io.connect(),

    getData: function () {
      this.socket.on("reserve", function (data) {
      });
    },

    setDataForPurchase: function (seat, line) {
      this.socket.emit("purchase", {x: seat, y: line});
    },

    setDataForReserve: function (seat, line) {
      this.socket.emit("reserve", {x: seat, y: line});
    },

    setDataForCancel: function (seat, line) {
      this.socket.emit("cancel", {x: seat, y: line});
    }
  };

  window.SocketClient = SocketClient;
})();
