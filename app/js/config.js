'use strict';

var portfolioConfig = angular.module('portfolioConfig', []);

/**
 *
 */
portfolioConfig.title = "My Portfolio";
portfolioConfig.navItems = [
                              {'text': 'Work', 'href': '#/work'},
                              {'text': 'About', 'href': '#/about'},
                              {'text': 'Press', 'href': '#/press'},
                              {'text': 'Contact', 'href': '#/contact'}
                            ];
portfolioConfig.routes = [
                            {'route': '/work', 'templateUrl': 'partials/projects.html', 'controller': 'ProjectListCtrl'},
                            {'route': '/work/:projectId', 'templateUrl': 'partials/project-details.html', 'controller': 'ProjectDetailCtrl'},
                            {'route': '/about', 'templateUrl': 'partials/about.html', 'controller': 'AboutCtrl'},
                            {'route': '/press', 'templateUrl': 'partials/press.html', 'controller': 'PressCtrl'},
                            {'route': '/contact', 'templateUrl': 'partials/contact.html', 'controller': 'ContactCtrl'}
                          ];
portfolioConfig.defaultRoute = '/work';