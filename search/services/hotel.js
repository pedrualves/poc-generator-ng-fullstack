;(function(ng) {
  'use strict';

  ng.module('teste')
    .service('hotel', [
      '$q',
      function($q) {
        this.doSomething = function() {
          return $q.when({yo: '!'});
        };
      }
    ]);
}(window.angular));
