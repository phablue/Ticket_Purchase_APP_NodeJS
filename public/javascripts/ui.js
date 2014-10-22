(function () {
  var UI = {
    onClickSeat: function () {
      var x = $(this).data("x");
      var y = $(this).data("y");
      this.reserveSeat(x, y);
    },

    reserveSeat: function (seat, line) {
      if (this.reserveMessage()) {
        $(this).off("click");
        SocketClient.setData(seat, line);
      }
      else {
        this.cancelMessage();
      }
    },

    reserveMessage: function () {
      return confirm("Would you like to reserve a seat?");
    },

    cancelMessage: function () {
      alert("Cancel a reservation.");
    }
  };

  window.UI = UI;
})();
