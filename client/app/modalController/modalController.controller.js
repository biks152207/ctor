'use strict';
const angular = require('angular');

/*@ngInject*/
export function modalControllerController($uibModalInstance, $http, Notification, $timeout) {
  'ngInject';
  // Hold the database error
  this.errors = {};
  this.message = null;
  this.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  }
  // Submit
  this.submit = submit.bind(this);

  function submit(form, formObject){
    if (form.$valid){
      this.submitted = true;
      $http.post('/api/subscriptions', formObject)
        .then(
          (result) =>{
            this.submitted = false;
            this.message = true;
            $timeout(() =>{
              this.message = null;
              $uibModalInstance.dismiss('cancel');
            }, 2000)
          },
          (error) => {
            Object.keys(error.data.errors).forEach((key, index) =>{
              form[key].$setValidity('mongoose', false);
            })
            this.errors = error.data.errors;
            this.submitted = false;
          }
        )  
    }
  }
}

export default angular.module('scApp.modalController', [])
  .controller('ModalControllerController', modalControllerController)
  .name;
