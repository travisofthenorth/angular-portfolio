'use strict';

var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('ContentController', function ($scope) {
  $scope.videos = [
    {'name': 'Video 1!',
     'thumbnail': 'img/videothumb.jpg',
     'url': 'https://www.youtube.com/watch?v=0dJu1Jj7VTw',
     'alt': 'A cool video'},
    {'name': 'Video 2',
     'thumbnail': 'img/videothumb.jpg',
     'url': 'https://www.youtube.com/watch?v=0dJu1Jj7VTw',
     'alt': 'A cool video'},
    {'name': 'Video 3',
     'thumbnail': 'img/videothumb.jpg',
     'url': 'https://www.youtube.com/watch?v=0dJu1Jj7VTw',
     'alt': 'A cool video'},
    {'name': 'Video 4',
     'thumbnail': 'img/videothumb.jpg',
     'url': 'https://www.youtube.com/watch?v=0dJu1Jj7VTw',
     'alt': 'A cool video'},
    {'name': 'Video 5',
     'thumbnail': 'img/videothumb.jpg',
     'url': 'https://www.youtube.com/watch?v=0dJu1Jj7VTw',
     'alt': 'A cool video'},
    {'name': 'Video 6',
     'thumbnail': 'img/videothumb.jpg',
     'url': 'https://www.youtube.com/watch?v=0dJu1Jj7VTw',
     'alt': 'A cool video'},
  ];
});