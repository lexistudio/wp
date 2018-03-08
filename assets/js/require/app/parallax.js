define([
  "jquery/jquery",
  "jquery/jquery.stellar.min"
], function() {
  "use strict";

  $(function () {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {}
    else {
      $.stellar({
        horizontalScrolling: false
      });
    }
  });

})