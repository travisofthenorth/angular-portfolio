'use strict';

var portfolioConfig = angular.module('portfolioConfig', []);

/**
 *
 */
portfolioConfig.title = "My Portfolio";
portfolioConfig.navItems = [
                              {'text': 'WORK', 'href': '#/work/'},
                              {'text': 'ABOUT', 'href': '#/about/'},
                              {'text': 'PRESS', 'href': '#/press/'},
                              {'text': 'CONTACT', 'href': '#/contact/'}
                            ];
portfolioConfig.routes = [
                            {'route': '/work/', 'templateUrl': 'partials/projects.html', 'controller': 'ProjectListCtrl'},
                            {'route': '/work/:projectId', 'templateUrl': 'partials/project-details.html', 'controller': 'ProjectDetailCtrl'},
                            {'route': '/about/', 'templateUrl': 'partials/about.html', 'controller': 'AboutCtrl'},
                            {'route': '/press/', 'templateUrl': 'partials/press.html', 'controller': 'PressCtrl'},
                            {'route': '/contact/', 'templateUrl': 'partials/contact.html', 'controller': 'ContactCtrl'}
                          ];
portfolioConfig.defaultRoute = '/work/';