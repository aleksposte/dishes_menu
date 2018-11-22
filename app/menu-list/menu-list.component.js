'use strict';

 angular.
  module('menuList').
    component('menuList', {
      templateUrl: 'menu-list/menu-list.template.html',
      controller: ['$http', function MenuListController($http) {
      var self = this;

      $http.get('menu/menu.json').then(function(response) {
        self.menus = response.data;
      });
    }]
  });
