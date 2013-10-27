'use strict';

angular.module('nashvillePokemonIndexApp.Controllers', [])
  .controller('MainCtrl', ['$scope', '$timeout', '$pokemonService', function($scope, $timeout, $pokemonService) {
    $scope.pokemons = $pokemonService.getPokemons();

    $timeout(function(){
      console.log('ding');
      $scope.pokemons.push(new Pokemon({
        name: 'dongblaster',
        picture: 'http://f3nation.com/wp-content/uploads/2013/06/Mmmmm-cheeseburger1.jpg',
        description: 'Lays down and dies on cheeseburgers'
      }));
      console.log('dong');
    }, 1000);

  }]);
