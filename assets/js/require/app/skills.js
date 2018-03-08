define([
  "jquery/jquery"
], function() {
  "use strict";

  $(function () {
    (function () {
      var progress = $(".js-progress");

      if (progress.length) {
        progress.each(function (e) {
          var $this = $(this);
          var num = $this.data("num");
          
          $this.css("width", num + "%");
          $this.find("div:last-child").text(num + "%");
        });
      }
    })();
  });

})