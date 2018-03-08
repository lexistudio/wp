define([
  "jquery/jquery",
  "gmaps",
  "stylesGoogleMaps"
], function(gmaps) {
  "use strict";

  $(function () {
    (function () {
      var gm1 = $("#mapCanvas").data("gm1");
      var gm2 = $("#mapCanvas").data("gm2");

      var myLatlng = new google.maps.LatLng(gm1, gm2);

      var mapOptions = {
        zoom: 12,
        scrollwheel: false,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        styles: styles
      }

      var map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);

      var imageMarker = new google.maps.MarkerImage('assets/images/marker.svg',
            new google.maps.Size(52, 52),
            new google.maps.Point(0,0),
            new google.maps.Point(26, 52));

      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Hello World!',
        icon: imageMarker
      });

      var contentString = String($("#mapCanvas").data("content"));

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });

    }());
  });

})