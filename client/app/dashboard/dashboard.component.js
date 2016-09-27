'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './dashboard.routes';

export class DashboardComponent {
  /*@ngInject*/
  constructor(uploaderService) {
    'ngInject';
    // console.log(resolverData);
    this.upload = upload;

    function upload(){
      uploaderService.upload(file)
        .then((res) =>{
          console.log(res);
        })
    }
  }
}

export default angular.module('scApp.dashboard', [uiRouter])
  .config(routes)
  .component('dashboard', {
    template: require('./dashboard.html'),
    controller: DashboardComponent,
    controllerAs: 'vm'
  })
  .name;
