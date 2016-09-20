'use strict';

angular.module('scApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('loginroutes', {
        url: '/loginroutes',
        template: '<loginroutes></loginroutes>'
      });
  });
