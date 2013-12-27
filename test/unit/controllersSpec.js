'use strict';

/* jasmine specs for controllers go here */
describe('PortfolioApp controllers', function(){

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      },
      toContainTrustedHtml: function() {
        // A way to mock sce parsing HTML
        return this.$$unwrapTrustedValue !== null;
      }
    });
  });

  beforeEach(module('portfolioApp'));
  beforeEach(module('portfolioServices'));

  // Test project list controller
  describe('ProjectListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/projects.json').
          respond([{name: 'Project 1'}, {name: 'Project 2'}]);

      scope = $rootScope.$new();
      ctrl = $controller('ProjectListCtrl', {$scope: scope});
    }));


    it('should create "projects" model with 2 projects fetched from xhr', function() {
      expect(scope.projects).toEqualData([]);
      $httpBackend.flush();

      expect(scope.projects).toEqualData(
          [{name: 'Project 1'}, {name: 'Project 2'}]);
    });
  });

  // Test project detail controller with video project
  describe('ProjectDetailCtrl', function(){
    var scope, $httpBackend, ctrl,
        videoProjectData = function() {
          return {
            name: 'A Video',
            description: 'This is a video',
            type: 'video'
          }
        };


    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/video-1.json').respond(videoProjectData());

      $routeParams.projectId = 'video-1';
      scope = $rootScope.$new();
      ctrl = $controller('ProjectDetailCtrl', {$scope: scope});
    }));


    it('should fetch video details', function() {
      expect(scope.project).toEqualData({});
      $httpBackend.flush();

      expect(scope.project).toEqualData(videoProjectData());
      expect(scope.embedHtml).toContainTrustedHtml();
    });
  });

  // Test project detail controller with photo album project
  describe('ProjectDetailCtrl', function(){
    var scope, $httpBackend, ctrl,
        photographyProjectData = function() {
          return {
            name: 'A photo album',
            description: 'These are photos',
            type: 'photo_album'
          }
        };

    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/album-1.json').respond(photographyProjectData());

      $routeParams.projectId = 'album-1';
      scope = $rootScope.$new();
      ctrl = $controller('ProjectDetailCtrl', {$scope: scope});
    }));


    it('should fetch photo album details', function() {
      expect(scope.project).toEqualData({});
      $httpBackend.flush();

      expect(scope.project).toEqualData(photographyProjectData());
      expect(scope.embedHtml).toEqualData();
    });
  });

  // Test "About" controller
  describe('AboutCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $sce, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/about.json').
          respond({image: 'img.png', bio: 'I am an artist.'});

      scope = $rootScope.$new();
      ctrl = $controller('AboutCtrl', {$scope: scope});
    }));


    it('should set up model with data fetched from xhr', function() {
      expect(scope.image).toEqualData();
      expect(scope.bioHtml).toEqualData();
      $httpBackend.flush();

      expect(scope.image).toEqualData('img.png');
      expect(scope.bioHtml).toContainTrustedHtml();
    });
  });

  // Test "Press" controller
  describe('PressCtrl', function(){
    var scope, ctrl, $httpBackend,
        pressProjectData = function() {
          return {
            press: [{name: 'Item 1'}, {name: 'Item 2'}]
          }
        };

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/press.json').
          respond(pressProjectData());

      scope = $rootScope.$new();
      ctrl = $controller('PressCtrl', {$scope: scope});
    }));


    it('should create "press" model with 2 press fetched from xhr', function() {
      expect(scope.press).toEqualData();
      $httpBackend.flush();

      expect(scope.press).toEqualData(pressProjectData().press);
    });
  });

  // Test "Contact" controller
  describe('ContactCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/contact.json').
          respond({email: "bill@gmail.com", text: "Contact Me"});

      scope = $rootScope.$new();
      ctrl = $controller('ContactCtrl', {$scope: scope});
    }));


    it('should create model with contact data fetched from xhr', function() {
      expect(scope.emailAddress).toEqualData();
      expect(scope.emailHref).toEqualData();
      expect(scope.text).toEqualData();

      $httpBackend.flush();

      expect(scope.emailAddress).toEqualData('bill@gmail.com');
      expect(scope.emailHref).toEqualData('mailto:bill@gmail.com');
      expect(scope.text).toEqualData('Contact Me');
    });
  });
});
