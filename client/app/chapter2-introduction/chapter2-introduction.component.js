'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './chapter2-introduction.routes';

export class Chapter2IntroductionComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('scApp.chapter2-introduction', [uiRouter])
  .config(routes)
  .component('chapter2Introduction', {
    template: require('./chapter2-introduction.html'),
    controller: Chapter2IntroductionComponent,
    controllerAs: 'chapter2IntroductionCtrl'
  })
  .name;
