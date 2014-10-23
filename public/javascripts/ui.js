(function () {
  var UI = {
    chosenSeats: [],

    onClickSeat: function () {
      var x = $(this).data("x");
      var y = $(this).data("y");
      UI.choiceSeat(x, y);
    },

    choiceSeat: function (seat, line) {
      var chosenSeat = event.currentTarget;
      if (this.reserveMessage()) {
        this.markChoiceSeat(chosenSeat);
        this.setChosenSeat(seat, line);
      }
      else {
        this.cancelMessage();
      }
    },

    setChosenSeat: function (seat, line) {
      this.chosenSeats.push([seat, line]);
      SocketClient.setData(seat, line);
    },

    markChoiceSeat: function (chosenSeat) {
      $(chosenSeat).removeClass("enable").addClass("choice");
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
