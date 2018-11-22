'use strict';
 
angular.
  module('menuDetail').
  component('menuDetail', {
    template: 'Ingrigient <span>{{ $ctrl.menuIngredients }}</span>',
    controller: ['$routeParams',
      function PhoneDetailController($routeParams) {
        console.log($routeParams);
        this.menuId = $routeParams.menuId;
      }
    ]
  });
