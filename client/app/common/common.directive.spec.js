'use strict';

describe('Directive: common', function() {
  // load the directive's module and view
  beforeEach(module('scApp.common'));
  beforeEach(module('app/common/common.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<common></common>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the common directive');
  }));
});
