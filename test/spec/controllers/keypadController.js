'use strict';

describe('Controller: KeypadcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('mathGameApp'));

  var KeypadcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KeypadcontrollerCtrl = $controller('KeypadcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
