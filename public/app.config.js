'use strict';

angular.
  module('footyApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/meets', {
          template: '<meet-details></meet-details>'
        }).
        when('/login', {
          template: '<login-details></login-details>'
        }).
        when('/register', {
          template: '<register-details></register-details>'
        }).
        otherwise('/meets');
    }
]);
