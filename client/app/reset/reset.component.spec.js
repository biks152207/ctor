'use strict';

describe('Component: ResetComponent', function() {
  // load the controller's module
  beforeEach(module('scApp.reset'));

  var ResetComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ResetComponent = $componentController('reset', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
