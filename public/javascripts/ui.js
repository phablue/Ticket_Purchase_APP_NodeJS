(function () {
  var UI = {
    confirmChosenSeat: function () {
      $('[data-id="purchase"]').click(function () {
        if ($(".choice").length != 0) {
          UI.confirmReservation();
        }
        else {
          UI.confirmReservationErrorMessage();
        }
      });
    },

    confirmReservation: function () {
      _.each($(".choice"), function (chosenSpot) {
        SocketClient.setDataForConfirm($(chosenSpot).data("x"), $(chosenSpot).data("y"));
      });
      UI.confirmReservationMessage();
    },

    reserve: function () {
      if ($(this).hasClass("choice")) {
        UI.cancelChosenSeat(this);
      }
      else {
        UI.choiceSeat(this);
      }
    },

    choiceSeat: function (chosenSpot) {
      if (this.reserveMessage()) {
        SocketClient.setDataForReserve($(chosenSpot).data("x"), $(chosenSpot).data("y"));
        this.markChoiceSeat(chosenSpot);
      }
    },

    cancelChosenSeat: function (chosenSpot) {
      SocketClient.setDataForCancel($(chosenSpot).data("x"), $(chosenSpot).data("y"));
      this.unmarkCancelSeat(chosenSpot);
      this.cancelChosenSeatMessage();
    },

    markChoiceSeat: function (chosenSpot) {
      $(chosenSpot).addClass("choice");
    },

    unmarkCancelSeat: function (chosenSpot) {
      $(chosenSpot).removeClass("choice");
    },

    cancelChosenSeatMessage: function () {
      alert("Cancel a chosen reservaion seat");
    },

    confirmReservationMessage: function () {
      alert("Succefully complecated to reserve.");
      window.location.href = "/";
    },

    confirmReservationErrorMessage: function () {
      alert("You must choose a seat.");
    },

    reserveMessage: function () {
      return confirm("Would you like to reserve a seat?");
    }
  };

  window.UI = UI;
})();
