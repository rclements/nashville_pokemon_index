'use strict';

describe('Directive: pokemon', function () {
  var el, scope;

  beforeEach(function(){
    module('nashvillePokemonIndexApp', 'templates');

    inject(function($compile, $rootScope){
      el = "<pokemon data=data></pokemon>";
      scope = $rootScope;
      scope.data = new Pokemon({
        name: 'dongblaster',
        picture: 'http://f3nation.com/wp-content/uploads/2013/06/Mmmmm-cheeseburger1.jpg',
        description: 'Lays down and dies on cheeseburgers'
      });
      $compile(el)(scope);
      scope.$digest();
    });
  });

  it('has an img element', function () {
    console.log(el);
    expect(angular.element('img', el).attr('src')).toEqual('http://f3nation.com/wp-content/uploads/2013/06/Mmmmm-cheeseburger1.jpg');
  });
});
