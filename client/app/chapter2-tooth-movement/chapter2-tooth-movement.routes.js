'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('home.chapter2-tooth-movement', {
      url: '/chapter2-tooth-movement',
      template: '<chapter-2-tooth-movement></chapter-2-tooth-movement>'
    });
}
