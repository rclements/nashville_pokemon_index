'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('nashvillePokemonIndexApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should show some fucking pokemonsssss', function () {
    expect(scope.pokemons.length).toBe(1);
  });
});
