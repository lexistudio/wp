define([
  "jquery/jquery"
], function() {
  "use strict";

  $(function () {
    //Nav Scroll Page
    (function() {
      var btn = $(".js-nav a");
      var phoneBtn = $(".js-nav-btn");

      if (btn.length) {
        btn.on("click", function (e) {
          e.preventDefault();
          var href = $(this).attr("href");

          if (window.matchMedia("(max-width: 980px)").matches) {
            $("html, body").stop().animate({
              scrollTop: $(href).offset().top - 56
            }, 700);
          } else {
            $("html, body").stop().animate({
              scrollTop: $(href).offset().top - 66
            }, 700);
          }

          phoneBtn.removeClass("active");
          $(".js-nav").removeClass("active");
        });
      }

      if (phoneBtn.length) {
        phoneBtn.on("click", function (e) {
          e.preventDefault();
          $(this).toggleClass("active");
          $(".js-nav").toggleClass("active");
        });
      }
    })();


    //Nav Class Active
    (function() {
      var nav = ".js-nav";

      function onScroll() {
        var scroll = $(document).scrollTop();

        $(nav + " a").each(function () {
          var hash = $(this).attr("href");
          var target = $(hash);

          if (target.position().top - 66 <= scroll) {
            $(nav + " a").removeClass("active");
            $(this).addClass("active");
          } else {
            $(this).removeClass("active");
          }
        });
      }

      onScroll();
      $(window).on("scroll", onScroll);
    })();
  });

})