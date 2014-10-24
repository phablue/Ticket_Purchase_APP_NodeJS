(function () {
  var UI = {
    confirmChosenSeat: function () {
      $('[data-id="purchase"]').click(function () {
        if ($(".choice").length != 0) {
          UI.setPurchasedSeat();
        }
        else {
          UI.comfirmErrorMessage();
        }
      });
    },

    setPurchasedSeat: function () {
      _.each($(".choice"), function (chosenSpot) {
        SocketClient.setData($(chosenSpot).data("x"), $(chosenSpot).data("y"));
      });
      UI.comfirmMessage();
    },

    reserveSeat: function () {
      if ($(this).hasClass("choice")) {
        UI.cancelChosenSeat(this);
      }
      else {
        UI.choiceSeat(this);
      }
    },

    choiceSeat: function (chosenSpot) {
      if (this.reserveMessage()) {
        this.markChoiceSeat(chosenSpot);
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

    comfirmErrorMessage: function () {
      alert("You must choose a seat.");
    },

    reserveMessage: function () {
      return confirm("Would you like to reserve a seat?");
    }
  };

  window.UI = UI;
})();
