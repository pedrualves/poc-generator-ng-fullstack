;(function(ng) {
  'use strict';

  ng.module('teste3')
    .factory('Room', [
      function() {
        var Room = function() {
          this.something = 123;
        };

        Room.prototype.isValid = function() {
          return !!this.something;
        };

        return Room;
      }
    ]);
}(window.angular));
