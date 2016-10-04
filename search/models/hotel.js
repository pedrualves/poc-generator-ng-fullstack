;(function(ng) {
  'use strict';

  ng.module('teste')
    .factory('hotel', [
      function() {
        var hotel = function() {
          this.name = '';
          this.birthDate = null;
        };

        hotel.prototype.isValid = function() {
          return !!this.name && !!this.birthDate;
        };

        return hotel;
      }
    ]);
}(window.angular));
