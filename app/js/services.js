'use strict';

var portfolioServices = angular.module('portfolioServices', ['ngResource']);

portfolioServices.factory('Portfolio', ['$resource',
  function($resource){
    return $resource('data/:projectId.json', {}, {
      query: {method:'GET', params:{projectId:'projects'}, isArray:true}
    });
  }
]);
