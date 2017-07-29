'use strict';

angular.module('registerDetails')
  .component('registerDetails',{
    templateUrl: 'register-details/register-details.template.html',
    controller: ['$routeParams', 'Authentication',
      function registerDetailsController($routeParams, Authentication) {

        var self = this;

        self.register = function() {
            self.message = Authentication.register(self.email,self.password);
            console.log(self.message);
            self.email = "";
            self.password = "";
            self.confirmPassword="";
            self.username="";
        };
      }
    ]
  });
