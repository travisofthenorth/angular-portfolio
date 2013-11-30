'use strict';

var portfolioApp = angular.module('portfolioApp', [
  'ngRoute',
  'ngSanitize',
  'portfolioControllers',
  'portfolioServices',
  'portfolioConfig'
]);

portfolioApp.config(['$routeProvider',
  function($routeProvider) {
    // Set up navigation from config
    var routes = portfolioConfig ? portfolioConfig.routes : null;
    if (routes !== undefined && routes.length > 0) {
      for (var i = 0; i < routes.length; i++) {
        $routeProvider.
          when(routes[i].route, {
          templateUrl: routes[i].templateUrl,
          controller: routes[i].controller
        });
      }
      var defaultRoute = portfolioConfig.config.defaultRoute;
      $routeProvider.otherwise({ redirectTo: defaultRoute ? defaultRoute : '/work' });
    } else {
      // Default navigation config
      $routeProvider.
        when('/work', {
          templateUrl: 'partials/projects.html',
          controller: 'ProjectListCtrl'
        }).
        when('/work/:projectId', {
          templateUrl: 'partials/project-details.html',
          controller: 'ProjectDetailCtrl'
        }).
        when('/about/', {
          templateUrl: 'partials/about.html',
          controller: 'AboutCtrl'
        }).
        when('/press/', {
          templateUrl: 'partials/press.html',
          controller: 'PressCtrl'
        }).
        when('/contact/', {
          templateUrl: 'partials/contact.html',
          controller: 'ContactCtrl'
        }).
        otherwise({
          redirectTo: '/work'
        });
    }
  }
]);