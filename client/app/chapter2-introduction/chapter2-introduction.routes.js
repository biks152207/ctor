'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('home.chapter2-introduction', {
      url: '/chapter2-introduction',
      template: '<chapter-2-introduction></chapter-2-introduction>'
    });
}
