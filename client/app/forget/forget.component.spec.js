'use strict';

describe('Component: ForgetComponent', function() {
  // load the controller's module
  beforeEach(module('scApp'));

  var ForgetComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ForgetComponent = $componentController('forget', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
