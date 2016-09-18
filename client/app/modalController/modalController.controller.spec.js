'use strict';

describe('Controller: ModalControllerCtrl', function() {
  // load the controller's module
  beforeEach(module('scApp.modalController'));

  var ModalControllerCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    ModalControllerCtrl = $controller('ModalControllerCtrl', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
