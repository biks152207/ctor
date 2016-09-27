'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('home.chapter02-couple-definition', {
      url: '/chapter02-couple-definition',
      template: '<chapter-02-couple-definition></chapter-02-couple-definition>'
    });
}
