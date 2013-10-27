'use strict';

angular.module('nashvillePokemonIndexApp')
  .controller('MainCtrl', function ($scope) {
    var shitplatter = new Pokemon({
      name: 'shitplatter',
      picture: 'http://f3nation.com/wp-content/uploads/2013/06/Mmmmm-cheeseburger1.jpg',
      description: "Lays on the floor and eats cheeseburgers"
    });
    $scope.pokemons = [
      shitplatter
    ];
  });
