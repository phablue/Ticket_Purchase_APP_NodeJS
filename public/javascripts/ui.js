(function () {
  var UI = {
    confirmReservation: function () {
      $('[data-id="purchase"]').click(function () {
        if ($(".choice").length != 0) {
          Seats.confirm();
        }
        else {
          UI.confirmReservationErrorMessage();
        }
      });
    },

    reserve: function () {
      if ($(this).hasClass("choice")) {
        Seats.cancelChoice(this);
      }
      else {
        Seats.choice(this);
      }
    },

    pickShowDate: function () {
      $("#datepicker").datepicker({
        dateFormat: "DD M dd yy",
        showOn: "button",
        buttonImage: "images/glyphicons_045_calendar.png",
        buttonImageOnly: true,
        buttonText: "Select date"
      });
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
