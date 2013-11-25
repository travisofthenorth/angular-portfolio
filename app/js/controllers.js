'use strict';

var portfolioControllers = angular.module('portfolioControllers', []);

portfolioControllers.controller('ProjectsController', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/projects.json').success(function(data) {
      $scope.projects = data;
    });
  }
]);