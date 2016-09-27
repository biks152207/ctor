'use strict';
const angular = require('angular');

export default angular.module('scApp.common', [])
  .directive('common', function($timeout) {
    return {
      templateUrl: 'app/common/common.html',
      restrict: 'EA',
      link: function(scope, element, attrs) {
        $timeout(function(){

        },0)
      }
    };
  })
  .name;
