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

    getStatus: function () {
      // dummy for IE
      $.getJSON("/seats", {dummy: new Date().getTime()}).done(this.create);
    },

    create: function (data) {
      _.each(data, function (line, indexY) {
        var $line = $("<div></div>").addClass("line");
        _.each(line, function (seat, indexX) {
          var $output = Seats.defaultSeat(indexX, indexY).appendTo($line);
          Seats.setByStatus(seat, $output);
        });
        $line.insertBefore('[data-id="purchase"]');
      });
    },

    setByStatus: function (seat, output) {
      if (seat == 1) {
        output.addClass("enable").on("click", UI.reserve);
      }
      else if (seat == 2 || seat == 3) {
        output.addClass("disable");
      }
    },

    defaultSeat: function (indexX, indexY) {
      return $("<div></div>",{"class": "seat","data-x": indexX, "data-y": indexY});
    }
  };

  window.Seats = Seats;
})();
