'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import $ from 'jquery';
import ngTouch from 'angular-touch';
import 'angular-ui-notification';
// import 'ng-file-upload';



import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import ngMessages from 'angular-messages';
// import ngValidationMatch from 'angular-validation-match';


import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import modalInstance from './modalController/modalController.controller';
import mongooseError from '../components/mongoose/mongooseError/mongooseError.directive';
import forget from './forget/forget.component';
import reset from './reset/reset.component';
import adminPanel from './admin-panel/admin-panel.component';
import dashboard from './dashboard/dashboard.component';
import localStorage from 'angular-local-storage';
import authenticate from './authenticity/authenticity.service';
import sideNav from './components/sideNav/sideNav.directive';
import thumbnail from './angular-thumbnail/angular-thumbnail.directive';
import uploader from './components/uploader/uploader.service';
import homeRoute from './home/home.component';
import leftNav from './leftNav/leftNav.directive';
import chapter2Introduction from './chapter2-introduction/chapter2-introduction.component';
import chapter2ToothMovement from './chapter2-tooth-movement/chapter2-tooth-movement.component';
import chapter2EquivalentSystem from './chapter02-equivalent-system/chapter02-equivalent-system.component';
import chapter02EquivalentUsageComponent from './chapter02-equivalent-usage/chapter02-equivalent-usage.component'
import chapter02CoupleDefinition from './chapter02-couple-definition/chapter02-couple-definition.component';
import common from './common/common.directive';

import './app.scss';

angular.module('scApp', [ngCookies, ngResource, ngSanitize, uiRouter, uiBootstrap, _Auth, account,
    admin, navbar, footer, main, constants, util, ngTouch, modalInstance, ngMessages, mongooseError, forget, reset, adminPanel, dashboard, leftNav, authenticate, localStorage, thumbnail, sideNav, uploader, homeRoute, chapter2Introduction, chapter2ToothMovement, chapter2EquivalentSystem, chapter02EquivalentUsageComponent,chapter02CoupleDefinition,common, require('ng-file-upload'), 'ui-notification', require('angular-validation-match')
  ])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
    // $rootScope.$on('$stateChangeSuccess', function(event, next){
    //   $rootScope.path = next.url;
    // })
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['scApp'], {
      strictDi: true
    });
  });
