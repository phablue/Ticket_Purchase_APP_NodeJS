(function () {
  var express = require("under");
  var Seats = {

    getAllData: function () {
      // dummy for IE
      $.getJSON("/seats", {dummy: new Date().getTime()}).done(this.createSeat);
    },

    createSeat: function (data) {
      _.each(data, function (line, indexY) {
        var $line = $("<div></div>").addClass("line");

        _.each(line, function (seat, indexX) {
          var $output = $("<div></div>", {
            "class": "seat",
            "data-x": indexX,
            "data-y": indexY
          }).appendTo($line);

          if (seat == 1) {
            $output.addClass("enable").on("click", onClickSeat);
          }
          else if (seat == 2) {
            $output.addClass("disable").on("click", onClickSeat);
          }
        });

        $line.appendTo("body");
      });
    }
  };

  window.Seats = Seats;
})();
