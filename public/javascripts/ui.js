(function () {
  var UI = {
    chosenSeats: [],

    onClickSeat: function () {
      var x = $(this).data("x");
      var y = $(this).data("y");
      UI.choiceSeat(x, y);
      UI.confirmChosenSeat()
    },

    confirmChosenSeat: function () {
      $('[data-id="purchase"]').click(function () {
        _.each(UI.chosenSeats, function (chosenSeat) {
          SocketClient.setPurchasedData(chosenSeat[0], chosenSeat[1]);
          UI.purchaseMessage();
        });
      });
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
      SocketClient.setChosenData(seat, line);
    },

    markChoiceSeat: function (chosenSeat) {
      $(chosenSeat).removeClass("enable").addClass("choice");
    },

    purchaseMessage: function () {
      alert("Succefully complecated to purchase.");
      window.location.href = "/";
    };

    reserveMessage: function () {
      return confirm("Would you like to reserve a seat?");
    },

    cancelMessage: function () {
      alert("Cancel a reservation.");
    }
  };

  window.UI = UI;
})();
