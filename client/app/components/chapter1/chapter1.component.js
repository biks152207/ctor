'use strict';
const angular = require('angular');

export class chapter1Component {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('scApp.chapter1', [])
  .component('chapter1', {
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: chapter1Component
  })
  .name;
