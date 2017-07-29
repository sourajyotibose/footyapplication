'use strict';

angular.module('loginDetails')
  .component('loginDetails',{
    templateUrl: 'login-details/login-details.template.html',
    controller: ['$routeParams','$firebase', '$firebaseAuth',
      function loginDetailsController($routeParams, $firebase, $firebaseAuth) {
        var self = this;
      }
    ]
  });
