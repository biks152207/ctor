'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('home.chapter02-equivalent-usage', {
      url: '/chapter02-equivalent-usage',
      template: '<chapter-02-equivalent-usage></chapter-02-equivalent-usage>'
    });
}
