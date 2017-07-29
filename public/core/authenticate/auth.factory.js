'use strict';

angular.module('core.authentication')
  .factory('Authentication', ['$rootScope', '$firebase', '$firebaseAuth',
    function($rootScope, $firebase, $firebaseAuth) {

      var ref = firebase.database().ref();
      var auth = $firebaseAuth();

      return {
        login : login,
        register : register
      };

      function login(user) {
        $rootScope.message = "Welcome" + $rootScope.user.email;
      }

      function register(email, password) {
        auth.$createUserWithEmailAndPassword(email,password).then(function(regUser) {
          $rootScope.message =  "Hi "+ email + ", thanks for registering";
        }).catch(function(error) {
          $rootScope.message = error.message;
        });
      }
    }
  ]);
