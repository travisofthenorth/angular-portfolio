'use strict';

var portfolioControllers = angular.module('portfolioControllers', []);

portfolioControllers.config = {
                                'navItems': [
                                  {'text': 'WORK', 'href': '#/work/'},
                                  {'text': 'ABOUT', 'href': '#/about/'},
                                  {'text': 'PRESS', 'href': '#/press/'},
                                  {'text': 'CONTACT', 'href': '#/contact/'}
                                ],
                                'routes': [
                                  {'route': '/work/', 'templateUrl': 'partials/projects.html', 'controller': 'ProjectListCtrl'},
                                  {'route': '/work/:projectId', 'templateUrl': 'partials/project-details.html', 'controller': 'ProjectDetailCtrl'},
                                  {'route': '/about/', 'templateUrl': 'partials/about.html', 'controller': 'AboutCtrl'},
                                  {'route': '/press/', 'templateUrl': 'partials/press.html', 'controller': 'PressCtrl'},
                                  {'route': '/contact/', 'templateUrl': 'partials/contact.html', 'controller': 'ContactCtrl'}
                                ],
                                'defaultRoute': '/work/'
                              };

portfolioControllers.controller('AppCtrl', ['$scope', '$http',
  function ($scope, $http) {
    // TODO
    $scope.navItems = portfolioControllers.config.navItems;
    $scope.copyrightText = '';
    // $scope.socialLinks = 
  }
]);

portfolioControllers.controller('ProjectListCtrl', ['$scope', 'Portfolio',
  function ($scope, Portfolio) {
    $scope.projects = Portfolio.query();
  }
]);

portfolioControllers.controller('ProjectDetailCtrl', ['$scope', 'Portfolio', '$sce', '$routeParams',
  function($scope, Portfolio, $sce, $routeParams) {
    $scope.project = Portfolio.get({projectId: $routeParams.projectId}, function (project) {
      $scope.embedUrl = project.embedUrl ? $sce.trustAsHtml(project.embedUrl) : '';
    });
  }
]);

portfolioControllers.controller('AboutCtrl', ['$scope',
  function ($scope) {
    $scope.title = "About";
  }
]);

portfolioControllers.controller('PressCtrl', ['$scope',
  function ($scope) {
    $scope.title = "Press";
  }
]);

portfolioControllers.controller('ContactCtrl', ['$scope',
  function ($scope) {
    $scope.title = "Contact";
  }
]);