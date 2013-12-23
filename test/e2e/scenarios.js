'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PortfolioApp app', function() {

  it('should redirect index.html to index.html#/work', function() {
    browser().navigateTo('app/index.html');
    expect(browser().location().url()).toBe('/work/');
  });

  describe('Project list view', function() {

    beforeEach(function() {
      browser().navigateTo('app/index.html#/work');
    });

    it('should render project links', function() {
      element('.project a:eq(0)').click();
      expect(browser().location().url()).toBe('/work/video-1');
    });

    it('should render navigation links', function() {
      element('.header-nav li:eq(1) a').click();
      expect(browser().location().url()).toBe('/about/');
    });

  });

  describe('Project detail view with video', function() {

    beforeEach(function() {
      browser().navigateTo('app/index.html#/work/video-1');
    });


    it('should display video-1 page', function() {
      expect(binding('project.name')).toBe('Video 1');
    });


    it('should embed video', function() {
      expect(element('iframe').count()).toBe(1);
    });

  });

  describe('Project detail view with photo album', function() {

    beforeEach(function() {
      browser().navigateTo('app/index.html#/work/album-1');
    });

    it('should not embed video', function() {
      expect(element('iframe').count()).toBe(0);
    });

  });

});
