;(function(ng) {
  'use strict';

  ng.module('teste')
    .config([
      '$routeProvider',
      function($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'search/templates/hotel.html',
            controller: 'SearchController',
            controllerAs: 'searchCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
      }
    ]);
}(window.angular));
