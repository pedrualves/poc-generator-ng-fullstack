;(function(ng) {
  'use strict';

  ng.module('teste3')
    .service('room', [
      '$q',
      function($q) {
        this.doSomething = function() {
          return $q.when({yo: '!'});
        };
      }
    ]);
}(window.angular));
