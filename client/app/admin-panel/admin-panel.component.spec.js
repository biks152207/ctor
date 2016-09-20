'use strict';

describe('Component: AdminPanelComponent', function() {
  // load the controller's module
  beforeEach(module('scApp.admin-panel'));

  var AdminPanelComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    AdminPanelComponent = $componentController('admin-panel', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
