define([
  "jquery/jquery",
  "jquery/jquery.shuffle.min"
], function() {
  "use strict";

  $(function () {
    (function () {
      var $grid = $('#grid');
      var $filter = $("#filter a");

      $grid.shuffle({
        itemSelector: '.works__elem-item',
      });

      $filter.click(function (e) {
        e.preventDefault();
        $filter.removeClass('active');
        $(this).addClass('active');

        var groups = $(this).data('group');
        $grid.shuffle('shuffle', groups);
      });
    }());
  });

})