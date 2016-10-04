;(function(ng) {
  'use strict';

  ng.module('teste')
    .factory('Hotel', [
      function() {
        var Hotel = function() {
          this.something = 123;
        };

        Hotel.prototype.isValid = function() {
          return !!this.something;
        };

        return Hotel;
      }
    ]);
}(window.angular));
