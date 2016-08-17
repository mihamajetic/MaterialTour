jQuery.fn.extend({
  WebTour: function (vertical, horizontal, size) {
    var vertical = (vertical == "top" || vertical == "bottom") ? vertical : "top";
    var horizontal = (horizontal == "left" || horizontal == "right") ? horizontal : "left";
    var size = (size == "small" || size == "large") ? size : "small";
    var topPosition;
    var leftPosition;
    switch (vertical) {
      case "top":
        topPosition = $(this).offset().top - 15;
        break;
      case "bottom":
        topPosition = $(this).offset().top + $(this).innerHeight() - 15;
        break;
    }

    switch (horizontal) {
      case "left":
        leftPosition = $(this).offset().left - 15;
        break;
      case "right":
        leftPosition = $(this).offset().left + $(this).innerWidth() - 15;
        break;
    }

    $("body").append('<div class="webtour-btn" style="top: ' + (topPosition) + 'px; left: ' + (leftPosition) + 'px;"><a class="pulse-button"><i class="fa fa-info" aria-hidden="true"></i></a></div>');
  }
});

  // (function ($) {
  //   var x = $(".first").offset();
  //   var y = $(".first");
  //   console.log("Top: " + x.top + " Left: " + x.left);
  //   console.log("w: " + y.outerWidth() + " h: " + y.outerHeight());
  //
  //   $("body").append('<div class="fixed-action-btn" style="top: ' + (x.top - 18.5) + 'px; left: ' + (x.left - 18.5) + 'px;"><a class="btn-floating btn-small red pulse-button"><i class="large material-icons">info</i></a></div>');
  //
  // })(jQuery);
