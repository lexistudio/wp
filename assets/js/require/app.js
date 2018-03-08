requirejs.config({baseUrl: "/assets/js/",});
require([
  "app/nav",
  "app/filter",
  "app/skills",
  "app/parallax",
  "app/video",
  "app/scroll",
  "app/animate",
  "app/gmap",
  "app/preload"
], function(){});