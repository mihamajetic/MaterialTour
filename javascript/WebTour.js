jQuery.fn.extend({
  WebTour: function (vertical, horizontal, size, text) {
    var vertical = (vertical == "top" || vertical == "bottom") ? vertical : "top";
    var horizontal = (horizontal == "left" || horizontal == "right") ? horizontal : "left";
    var size = (size == "small" || size == "large") ? size : "small";
    var text = text;
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

    $("body").append('<div class="webtour-btn" style="top: ' + (topPosition) + 'px; left: ' + (leftPosition) + 'px;"><a class="pulse-button"><i class="fa fa-info" aria-hidden="true"></i></a><div class="pulse-content" style="display: none;"> ' + text + ' </div></div>');

  }
});

$(document).ready(function() {
  $(".pulse-button").click(function () {
    $(this).parent().children(".pulse-content").fadeIn(1000);
    $(this).css("visibility", "hidden");
  });

});
