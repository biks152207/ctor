'use strict';
const angular = require('angular');

export default angular.module('scApp.mymodal', [])
  .directive('mymodal', function() {
    return {
      templateUrl: 'app/mymodal/mymodal.html',
      restrict: 'EA',
      link: function(scope, element, attrs) {}
    };
  })
  .name;
