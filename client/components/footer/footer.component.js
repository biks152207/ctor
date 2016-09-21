import angular from 'angular';

export class FooterComponent {
  constructor($state, $rootScope) {
    'ngInject';
    this.state = $state;
    // State 
    var state = {
      '/admin-panel': true,
      '/dashboard': true,
      '/dashboard/upload': true
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
