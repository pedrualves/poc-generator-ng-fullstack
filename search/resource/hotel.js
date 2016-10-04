;(function(ng) {
  'use strict';

  ng.module('teste')
    .factory('hotel', [
      '$resource',
      function($resource) {
        var _url = '/api/hotel/:id';
        var _params = {
          id: '@id'
        };
        var _method = {
          update: {
            method: 'PUT',
            isArray: false
          },
          insert: {
            method: 'POST',
            isArray: false
          },
          get: {
            method: 'GET',
            isArray: true
          },
          getById: {
            method: 'GET',
            isArray: false
          },
          delete: {
            method: 'DELETE',
            isArray: false
          },
        };

        return $resource(_url, _params, _method);
      }
    ]);
}(window.angular));
