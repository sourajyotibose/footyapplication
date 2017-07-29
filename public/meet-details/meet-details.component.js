'use strict';

angular.module('meetDetails')
  .component('meetDetails',{
    templateUrl: 'meet-details/meet-details.template.html',
    controller: ['$routeParams',
      function meetDetailsController($routeParams) {
        var self = this;
      }
    ]
  });
