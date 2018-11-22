'use strict';
 angular.
  module('menuApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/menus', {
          template: '<menu-list></menu-list>'
        }).
        // when('/menus/:menuId', {
        //   template: '<menu-detail></menu-detail>'
        // }).
        otherwise('/menus');
    }
  ]);
