'use strict';
const angular = require('angular');

export default angular.module('scApp.leftNav', [])
  .directive('leftNav', function() {
    return {
      // templateUrl: 'app/leftNav/leftNav.html',
      templateUrl: 'nav.html',
      restrict: 'EA',
      link: function(scope, element, attrs) {}
    };
  })
  .name;
