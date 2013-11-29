'use strict';

var portfolioServices = angular.module('portfolioServices', ['ngResource']);

portfolioServices.factory('Portfolio', ['$resource',
  function($resource){
    return $resource('data/:dataId.json', {}, {
      query: {method:'GET', params:{dataId:'projects'}, isArray:true}
    });
  }
]);
