define([
  "domReady",
  "jquery/jquery"
], function(domReady) {
  "use strict";

  NProgress.start();

  domReady(function () {
    setTimeout(function () {
      NProgress.done();
    }, 500);

    setTimeout(function () {
      $(".js-head").addClass("active");
    }, 1000);
  });

})