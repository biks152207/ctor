'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './chapter02-couple-definition.routes';

export class Chapter02CoupleDefinitionComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('scApp.chapter02-couple-definition', [uiRouter])
  .config(routes)
  .component('chapter02CoupleDefinition', {
    template: require('./chapter02-couple-definition.html'),
    controller: Chapter02CoupleDefinitionComponent,
    controllerAs: 'chapter02CoupleDefinitionCtrl'
  })
  .name;
