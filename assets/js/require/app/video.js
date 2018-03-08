define([
  "jquery/jquery",
  "jquery/jquery.colorbox.min"
], function() {
  "use strict";

  (function () {
    var video = $(".js-video");

    if (video.length) {
      video.colorbox({
        iframe: true,
        innerWidth: "80%",
        innerHeight: "80%"
      });
    }
  })();

})