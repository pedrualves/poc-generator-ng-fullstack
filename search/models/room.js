;(function(ng) {
  'use strict';

  ng.module('teste3')
    .factory('room', [
      function() {
        var room = function() {
          this.name = '';
          this.birthDate = null;
        };

        room.prototype.isValid = function() {
          return !!this.name && !!this.birthDate;
        };

        return room;
      }
    ]);
}(window.angular));
