'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './chapter2-tooth-movement.routes';

export class Chapter2ToothMovementComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('scApp.chapter2-tooth-movement', [uiRouter])
  .config(routes)
  .component('chapter2ToothMovement', {
    template: require('./chapter2-tooth-movement.html'),
    controller: Chapter2ToothMovementComponent,
    controllerAs: 'chapter2ToothMovementCtrl'
  })
  .name;
