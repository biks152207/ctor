'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('admin-panel', {
      url: '/admin-panel',
      template: '<admin-panel></admin-panel>'
    });
}
