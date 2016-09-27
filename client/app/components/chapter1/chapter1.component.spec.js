'use strict';

describe('Component: chapter1', function() {
  // load the component's module
  beforeEach(module('scApp.chapter1'));

  var chapter1Component;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    chapter1Component = $componentController('chapter1', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
