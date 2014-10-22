(function () {
  var UI = {
    onClickSeat: function () {
      var x = $(this).data("x");
      var y = $(this).data("y");
    },

    reserveSeat: function (line, seat) {
      if (this.reserveMessage()) {
        $(this).off("click");
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
