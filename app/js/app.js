'use strict';

var portfolioApp = angular.module('portfolioApp', [
  'ngRoute',
  'portfolioControllers'
]);

portfolioApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/work', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsController'
      }).
      when('/work/:projectId', {
        templateUrl: 'partials/project-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/work'
      });
  }
]);