'use strict';

import angular from 'angular';

export default class SignupController {

  /*@ngInject*/
  constructor(Auth, $state, $uibModalInstance, $uibModal) {
    this.Auth = Auth;
    this.uibModal = $uibModal;
    this.$state = $state;
    this.uibModalInstance = $uibModalInstance
  }
  closeModal(){
    this.uibModalInstance.dismiss();
  }
  openLogin(){
    this.uibModalInstance.dismiss();
    var modalInstance = this.uibModal.open({
      templateUrl: 'app/account/login/login.html',
      controller: 'LoginController',
      controllerAs: 'vm',
      size: 'md'
    });
  }
  register(form) {
    this.submitted = true;

    if(form.$valid) {
      return this.Auth.createUser({
        name: this.user.name,
        email: this.user.email,
        password: this.user.password
      })
        .then((result) => {
          console.log(result);
          // Account created, redirect to home
          this.uibModalInstance.dismiss();
          // this.$state.go('main');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
    }
  }
}
