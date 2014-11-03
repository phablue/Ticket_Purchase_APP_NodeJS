(function () {
  var Seats = {
    confirm: function () {
      _.each($(".choice"), function (chosenSpot) {
        SocketClient.setDataForConfirm($(chosenSpot).data("x"), $(chosenSpot).data("y"));
      });
      UI.confirmReservationMessage();
    },

    choice: function (chosenSpot) {
      if (UI.reserveMessage()) {
        SocketClient.setDataForReserve($(chosenSpot).data("x"), $(chosenSpot).data("y"));
        UI.markChoiceSeat(chosenSpot);
      }
    },

    cancelChoice: function (chosenSpot) {
      SocketClient.setDataForCancel($(chosenSpot).data("x"), $(chosenSpot).data("y"));
      UI.unmarkCancelSeat(chosenSpot);
      UI.cancelChosenSeatMessage();
    },

    clickSeat: function () {
      $(".enable").on("click", UI.reserve);
    }
  };

  window.Seats = Seats;
})();
