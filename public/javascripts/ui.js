(function () {
  var UI = {
    // chosenSeats: [],

    onClickSeat: function () {
      var x = $(this).data("x");
      var y = $(this).data("y");
      UI.reserveSeat(x, y);
      UI.confirmChosenSeat();
    },

    confirmChosenSeat: function () {
      $('[data-id="purchase"]').click(function () {
        _.each($(".choice"), function (chosenSeat) {
          SocketClient.setData($(chosenSeat).data("x"), $(chosenSeat).data("y"));
        });
        UI.comfirmMessage();
      });
    },

    reserveSeat: function (seat, line) {
      var chosenSeat = event.currentTarget;
      if ($(chosenSeat).hasClass("choice")) {
        this.cancelChosenSeat(chosenSeat, seat, line);
      }
      else {
        this.choiceSeat(chosenSeat, seat, line);
      }
    },

    choiceSeat: function (chosenSeat, seat, line) {
      if (this.reserveMessage()) {
        this.markChoiceSeat(chosenSeat);
      }
      else {
        this.cancelMessage();
      }
    },

    cancelChosenSeat: function (chosenSeat, seat, line) {
      this.unmarkCancelSeat(chosenSeat);
      this.cancelChosenSeatMessage();
    },

    unmarkCancelSeat: function (chosenSeat) {
      $(chosenSeat).removeClass("choice");
    },

    markChoiceSeat: function (chosenSeat) {
      $(chosenSeat).addClass("choice");
    },

    unmarkCancelSeat: function (chosenSeat) {
      $(chosenSeat).removeClass("choice");
    },

    cancelChosenSeatMessage: function () {
      alert("Cancel a chosen reservaion seat");
    },

    comfirmMessage: function () {
      alert("Succefully complecated to reserve.");
      window.location.href = "/";
    },

    reserveMessage: function () {
      return confirm("Would you like to reserve a seat?");
    },

    cancelReserveMessage: function () {
      alert("Cancel a reservation.");
    }
  };

  window.UI = UI;
})();
