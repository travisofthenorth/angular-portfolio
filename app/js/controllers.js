'use strict';

var portfolioControllers = angular.module('portfolioControllers', ['portfolioConfig']);

portfolioControllers.controller('AppCtrl', ['$scope',
  function ($scope) {
    $scope.navItems = portfolioConfig.navItems;
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