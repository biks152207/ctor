'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('home.chapter02-equivalent-system', {
      url: '/chapter02-equivalent-system',
      template: '<chapter-02-equivalent-system></chapter-02-equivalent-system>'
    });
}
