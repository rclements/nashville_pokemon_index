'use strict';

angular.module('nashvillePokemonIndexApp.Controllers', [])
  .controller('MainCtrl', ['$scope', '$timeout', '$pokemonService', function($scope, $timeout, $pokemonService) {
    $scope.pokemons = $pokemonService.getPokemons();

    $timeout(function(){
      $scope.pokemons.push(new Pokemon({
        name: 'Dugtrio',
        picture: 'http://pokemon.supercheats.com/artwork/51.png',
        description: 'Ground Type'
      }));
    }, 1000);

  }]);
