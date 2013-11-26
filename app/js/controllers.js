'use strict';

var portfolioControllers = angular.module('portfolioControllers', []);

portfolioControllers.controller('ProjectListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/projects.json').success(function(data) {
      $scope.projects = data;
    });
  }
]);

portfolioControllers.controller('ProjectDetailCtrl', ['$scope', '$http', '$sce', '$routeParams',
  function($scope, $http, $sce, $routeParams) {
    $http.get('data/' + $routeParams.projectId +'.json').success(function(data) {
      $scope.project = data;
      $scope.embedUrl = $sce.trustAsHtml(data.embedUrl);
    });
  }
]);