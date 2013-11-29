'use strict';

var portfolioControllers = angular.module('portfolioControllers', []);

/**
 *
 */
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

portfolioControllers.controller('AppCtrl', ['$scope',
  function ($scope) {
    $scope.navItems = portfolioControllers.config.navItems;
    $scope.copyrightText = 'All works &copy; 2012 Some Dude';
    //$scope.socialLinks = 
  }
]);

portfolioControllers.controller('ProjectListCtrl', ['$scope', 'Portfolio',
  function ($scope, Portfolio) {
    $scope.projects = Portfolio.query();
  }
]);

portfolioControllers.controller('ProjectDetailCtrl', ['$scope', 'Portfolio', '$sce', '$routeParams',
  function ($scope, Portfolio, $sce, $routeParams) {
    $scope.project = Portfolio.get({dataId: $routeParams.projectId}, function (project) {
      $scope.embedHtml = project.embedHtml ? $sce.trustAsHtml(project.embedHtml) : '';
    });
  }
]);

portfolioControllers.controller('AboutCtrl', ['$scope', 'Portfolio', '$sce',
  function ($scope, Portfolio, $sce) {
    $scope.title = "About";
    Portfolio.get({dataId: 'about'}, function (data) {
      $scope.image = data.image;
      $scope.bioHtml = data.bio ? $sce.trustAsHtml(data.bio) : '';
    });
  }
]);

portfolioControllers.controller('PressCtrl', ['$scope', 'Portfolio',
  function ($scope, Portfolio) {
    $scope.title = "Press";
    Portfolio.get({dataId: 'press'}, function (data) {
      $scope.events = data.events;
    });
  }
]);

portfolioControllers.controller('ContactCtrl', ['$scope', 'Portfolio',
  function ($scope, Portfolio) {
    $scope.title = "Contact";
    Portfolio.get({dataId: 'contact'}, function (data) {
      $scope.emailAddress = data.email;
      $scope.emailHref = 'mailto:' + data.email;
      $scope.text = data.text;
    });
  }
]);