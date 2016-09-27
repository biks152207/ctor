import angular from 'angular';

export class FooterComponent {
  constructor($state, $rootScope) {
    'ngInject';
    this.state = $state;
    // State
    var state = {
      '/admin-panel': true,
      '/dashboard': true,
      '/dashboard/upload': true,
      '/home': true,
      '/home/title': true,
      '/home/copyright':true,
      '/home/foreword':true,
      '/home/preface':true,
      '/home/acknowledgements':true,
      '/home/contributors':true,
      '/home/force': true,
      '/home/restricted': true,
      '/home/gravity': true,
      '/home/tooth': true,
      '/home/moment-definition': true,
      '/home/moment': true,
      '/home/introduction': true,
      '/home/magnitude-of-force':true,
      '/home/direction-of-force': true,
      '/home/transmissibility': true,
      '/home/adding-force-together': true,
      '/home/component-of-force': true,
      '/home/restricted-objects': true,
      '/home/moment-force': true,
      '/home/characteristics': true,
      '/home/review-question': true,
      '/home/summary': true,
      '/home/recommended-reading': true,
      '/home/chapter2-introduction': true,
      '/home/chapter2-tooth-movement': true,
      '/home/chapter02-equivalent-system': true,
      '/home/chapter02-equivalent-usage': true,
      '/home/chapter02-couple-definition': true
    }
    $rootScope.$on('routeChange', function(event, path){
      // console.log(path);
      console.log(state[path.url]);
      this.showFooter = state[path.url] == true ? false: true;
      console.log(this.showFooter);
    }.bind(this));
  }
}

export default angular.module('directives.footer', [])
  .component('footers', {
    template: require('./footer.html'),
    controller: FooterComponent,
    controllerAs: 'vm'
  })
  .name;
