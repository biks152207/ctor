'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './chapter02-equivalent-system.routes';

export class Chapter02EquivalentSystemComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('scApp.chapter02-equivalent-system', [uiRouter])
  .config(routes)
  .component('chapter02EquivalentSystem', {
    template: require('./chapter02-equivalent-system.html'),
    controller: Chapter02EquivalentSystemComponent,
    controllerAs: 'chapter02EquivalentSystemCtrl'
  })
  .name;
