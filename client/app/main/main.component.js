import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  /*@ngInject*/
  constructor($uibModal, $timeout) {
    'ngInject';
    // Modal instance
    this.uibModal = $uibModal;
    this.timeout = $timeout;
    this.recommended = [
      {
        title: 'Name of the book',
        description: 'Description of the books',
        image: '/assets/images/1.jpg'

      },
      {
        title: 'Name of the book',
        description: 'Description of the books',
        image: '/assets/images/2.jpg'

      },
      {
        title: 'Name of the book',
        description: 'Description of the books',
        image: '/assets/images/3.jpg'
      }
    ]
    this.myInterval = 2000;
    this.noWrapSlides = false;
  }
  open(){
    var modalInstance = this.uibModal.open({
      templateUrl: 'app/modalController/modal.html',
      controller: 'ModalControllerController',
      controllerAs: '$ctrl',
      size: 'lg'
    });
  }
  contact(form){
    if (form.$valid){
      this.contactFormSubmitted = true;
      this.timeout(() =>{
        this.contactFormSubmitted = false;
        this.contactFormMessage = true;
      },2000)
      this.timeout(() =>{
        this.contactFormMessage = false;
      },4000)
    }
  }

}

export default angular.module('scApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
