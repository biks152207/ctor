'use strict';
const angular = require('angular');

/*@ngInject*/
export function mymodalController() {
  this.message = 'Hello';
}

export default angular.module('scApp.mymodal', [])
  .controller('MymodalController', mymodalController)
  .name;
