'use strict';

describe('Directive: mymodal', function() {
  // load the directive's module and view
  beforeEach(module('scApp.mymodal'));
  beforeEach(module('app/mymodal/mymodal.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<mymodal></mymodal>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the mymodal directive');
  }));
});
