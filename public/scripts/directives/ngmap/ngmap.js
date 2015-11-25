'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('ngmap',function() {
    return {
        templateUrl:'scripts/directives/ngmap/ngmap.html',
        restrict: 'E',
        replace: true,
    }
  });
