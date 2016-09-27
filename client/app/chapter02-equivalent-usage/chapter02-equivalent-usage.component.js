'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './chapter02-equivalent-usage.routes';

export class Chapter02EquivalentUsageComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('scApp.chapter02-equivalent-usage', [uiRouter])
  .config(routes)
  .component('chapter02EquivalentUsage', {
    template: require('./chapter02-equivalent-usage.html'),
    controller: Chapter02EquivalentUsageComponent,
    controllerAs: 'chapter02EquivalentUsageCtrl'
  })
  .name;
