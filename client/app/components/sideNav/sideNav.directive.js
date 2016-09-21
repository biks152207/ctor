'use strict';
const angular = require('angular');

export default angular.module('scApp.sideNav', [])
  .directive('sideNav', function() {
    return {
      templateUrl: 'app/components/sideNav/sideNav.html',
      restrict: 'EA',
      link: function(scope, element, attrs) {}
    };
  })
  .name;
