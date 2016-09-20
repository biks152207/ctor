'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('forget', {
      url: '/forget',
      template: '<forget></forget>'
    });
}
