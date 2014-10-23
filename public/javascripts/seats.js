(function () {
  var Seats = {
    getAllSeatsStatus: function () {
      // dummy for IE
      $.getJSON("/seats", {dummy: new Date().getTime()}).done(this.settingSeats);
    },

    settingSeats: function (data) {
      _.each(data, function (line, indexY) {
        var $line = $("<div></div>").addClass("line");
        _.each(line, function (seat, indexX) {
          var $output = Seats.defaultSeat(indexX, indexY).appendTo($line);
          Seats.settingByStatus(seat, $output);
        });
        $line.insertBefore("button");
      });
    },

    settingByStatus: function (seat, output) {
      if (seat == 1) {
        output.addClass("enable").on("click", UI.onClickSeat);
      }
      else if (seat == 2) {
        output.addClass("disable").off("click");
      }
    },

    defaultSeat: function (indexX, indexY) {
      return $("<div></div>",{"class": "seat","data-x": indexX, "data-y": indexY});
    }
  };

  window.Seats = Seats;
})();
