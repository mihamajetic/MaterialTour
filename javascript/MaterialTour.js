$(document).ready(function() {
  (function ($) {
    var x = $(".first").offset();
    var y = $(".first");
    console.log("Top: " + x.top + " Left: " + x.left);
    console.log("w: " + y.outerWidth() + " h: " + y.outerHeight());

    $("body").append('<div class="fixed-action-btn" style="top: ' + (x.top - 18.5) + 'px; left: ' + (x.left - 18.5) + 'px;"><a class="btn-floating btn-small red pulse-button"><i class="large material-icons">info</i></a></div>');

  })(jQuery);
});
