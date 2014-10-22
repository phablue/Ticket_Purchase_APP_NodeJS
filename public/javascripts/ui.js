(function () {
  var UI = {
    onClickSeat: function () {
      var x = $(this).data("x");
      var y = $(this).data("y");
      UI.reserveSeat(x, y);
    },

    reserveSeat: function (seat, line) {
      if (this.reserveMessage()) {
        var choiceSeat = event.currentTarget;
        $(choiceSeat).off("click").css("background-color", "Yellow");
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
