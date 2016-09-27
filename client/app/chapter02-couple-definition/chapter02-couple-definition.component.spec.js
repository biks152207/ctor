'use strict';

describe('Component: Chapter02CoupleDefinitionComponent', function() {
  // load the controller's module
  beforeEach(module('scApp.chapter02-couple-definition'));

  var Chapter02CoupleDefinitionComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    Chapter02CoupleDefinitionComponent = $componentController('chapter02-couple-definition', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
