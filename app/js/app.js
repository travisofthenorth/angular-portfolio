'use strict';

var portfolioApp = angular.module('portfolioApp', [
  'ngRoute',
  'ngSanitize',
  'portfolioControllers'
]);

portfolioApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/work', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectListCtrl'
      }).
      when('/work/:projectId', {
        templateUrl: 'partials/project-detail.html',
        controller: 'ProjectDetailCtrl'
      }).
      otherwise({
        redirectTo: '/work'
      });
  }
]);