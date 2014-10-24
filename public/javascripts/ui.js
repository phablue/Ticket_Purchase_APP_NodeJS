(function () {
  var UI = {
    onClickSeat: function () {
      UI.reserveSeat();
      UI.confirmChosenSeat();
    },

    confirmChosenSeat: function () {
      $('[data-id="purchase"]').click(function () {
        _.each($(".choice"), function (chosenSpot) {
          SocketClient.setData($(chosenSpot).data("x"), $(chosenSpot).data("y"));
        });
        UI.comfirmMessage();
      });
    },

    reserveSeat: function () {
      var chosenSpot = event.currentTarget;
      if ($(chosenSpot).hasClass("choice")) {
        this.cancelChosenSeat(chosenSpot);
      }
      else {
        this.choiceSeat(chosenSpot);
      }
    },

    choiceSeat: function (chosenSpot) {
      if (this.reserveMessage()) {
        this.markChoiceSeat(chosenSpot);
      }
      else {
        this.cancelMessage();
      }
    },

    cancelChosenSeat: function (chosenSpot) {
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
