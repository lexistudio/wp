define([
  "jquery/jquery"
], function() {
  "use strict";

  $(function () {
    (function () {
      var elem = $(".js-animate");

      function points () {
        var scroll = $(window).scrollTop();
        elem.each(function (i) {
          var height = $(window).innerHeight();
          var offset = $(this).offset().top - height;
          
          scroll >= offset ? $(this).addClass("active") : $(this).removeClass("active");
        });
      }

      points();
      $(window).on("scroll", points);
    })();
  });

})