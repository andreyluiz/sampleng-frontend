'use strict';

/**
 * @ngdoc function
 * @name sampleNgFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleNgFrontendApp
 */
angular.module('sampleNgFrontendApp')
  .controller('MainCtrl', function ($scope, $http, $routeParams, $window) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
