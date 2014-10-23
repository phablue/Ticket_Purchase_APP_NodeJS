(function () {
  var UI = {
    onClickSeat: function () {
      var x = $(this).data("x");
      var y = $(this).data("y");
      UI.reserveSeat(x, y);
    },

    reserveSeat: function (seat, line) {
      var choiceSeat = event.currentTarget;
      if (this.reserveMessage()) {
        this.markChoiceSeat(choiceSeat);
        SocketClient.setData(seat, line);
      }
      else {
        this.cancelMessage();
      }
    },

    markChoiceSeat: function (choiceSeat) {
      $(choiceSeat).removeClass("enable").addClass("choice");
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
