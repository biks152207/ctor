'use strict';

export function routeConfig($urlRouterProvider, $locationProvider, NotificationProvider) {
  'ngInject';
  // NotificationProvider.setOptions({
  //     delay: 100,
  //     startTop: 20,
  //     startRight: 10,
  //     verticalSpacing: 20,
  //     horizontalSpacing: 20,
  //     positionX: 'left',
  //     positionY: 'bottom'
  // });

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);
}
