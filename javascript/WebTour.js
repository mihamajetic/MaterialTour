jQuery.fn.extend({
  WebTour: function (vertical, horizontal, size, text) {
    var vertical = (vertical == "top" || vertical == "bottom") ? vertical : "top";
    var horizontal = (horizontal == "left" || horizontal == "right") ? horizontal : "left";
    var size = (size == "small" || size == "large") ? size : "small";
    var text = text;
    var topPosition;
    var leftPosition;
    var id = $.now();
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

    $("body").append('<div class="pulse" id="' + id + '"></div>')
    $("#" + id).append('<div class="webtour-btn" style="top: ' + (topPosition) + 'px; left: ' + (leftPosition) + 'px;"><a class="pulse-button"><i class="fa fa-info" aria-hidden="true"></i></a></div>');
    $("#" + id).append('<div class="arrow_box" style="display: none;top: ' + (topPosition + 28 + 10) + 'px; left: ' + (leftPosition - 140 + 14) + 'px;">' + text + '</div>');
  }
});

$(document).ready(function() {
  $(".pulse-button").click(function () {
    var id = $(this).parent().parent().attr("id");
    $("#" + id).children(".arrow_box").fadeIn(1000);
    $(this).css("visibility", "hidden");
  });

});
