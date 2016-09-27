'use strict';

describe('Directive: leftNav', function() {
  // load the directive's module and view
  beforeEach(module('scApp.leftNav'));
  beforeEach(module('app/leftNav/leftNav.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<left-nav></left-nav>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the leftNav directive');
  }));
});
