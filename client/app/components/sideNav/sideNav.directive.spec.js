'use strict';

describe('Directive: sideNav', function() {
  // load the directive's module and view
  beforeEach(module('scApp.sideNav'));
  beforeEach(module('app/components/sideNav/sideNav.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<side-nav></side-nav>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the sideNav directive');
  }));
});
