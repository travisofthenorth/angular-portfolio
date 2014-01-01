'use strict';

var portfolioControllers = angular.module('portfolioControllers', ['portfolioConfig']);

portfolioControllers.controller('AppCtrl', ['$scope',
  function ($scope) {
    $scope.title = portfolioConfig.title;
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
      // A bit more work to do for videos
      if (project.type == 'video') {
        var embedHtml = project.embed_html ? project.embed_html : (function (data) {
          var videoSrc = '';
          var embed = '<iframe width="1000" height="562" src="{video_src}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
          if (data.video_domain == 'youtube') {
            videoSrc = '//www.youtube.com/embed/{video_id}?autohide=1&fs=1&autoplay=0&iv_load_policy=3&rel=0&modestbranding=1&showinfo=0&hd=1';
          } else if (data.video_domain == 'vimeo') {
            videoSrc = '//player.vimeo.com/video/{video_id}?title=0&portrait=0&byline=0';
          }
          return embed.replace('{video_src}', videoSrc.replace('{video_id}', data.video_id));
        })(project);
        $scope.embedHtml = $sce.trustAsHtml(embedHtml);
      }
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
      $scope.press = data.press;
    });
  }
]);

portfolioControllers.controller('ContactCtrl', ['$scope', 'Portfolio', '$sce', '$http',
  function ($scope, Portfolio, $sce, $http) {
    $scope.title = "Contact";
    $scope.disabled = false;
    Portfolio.get({dataId: 'contact'}, function (data) {
      $scope.emailAddress = data.email;
      $scope.emailHref = 'mailto:' + data.email;
      $scope.emailHrefTrusted = $sce.trustAsResourceUrl($scope.emailHref);
      $scope.text = data.text;
      $scope.send = function() {
        if ($scope.disabled) { return; }
        $scope.disabled = true;
        $http.post('/send.php', $scope.msg).
          success(function(data){
            $scope.success = true;
            $scope.msg = {};
            $scope.disabled = false;
          }).
          error(function(data){
            $scope.httpError = true;
            $scope.disabled = false;
          });
      };
    });
  }
]);