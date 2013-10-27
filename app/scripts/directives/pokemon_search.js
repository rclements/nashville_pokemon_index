angular.module('nashvillePokemonIndexApp')
  .directive('pokemonSearch', ['$timeout', '$pokemonService', function($timeout, $pokemonService){
    return {
      restrict: 'E',
      scope: {
        data: '='
      },
      templateUrl: 'templates/pokemon_search.html',
      link: function($scope, element, attrs){
        $scope.pokemons = $pokemonService.getPokemons();

        $scope.showPokemon = function(pokemon){
          $scope.$emit('showPokemon', pokemon);
        };

        $timeout(function(){
          $scope.pokemons.push(new Pokemon({
            name: 'Dugtrio',
            picture: 'http://pokemon.supercheats.com/artwork/51.png',
            description: 'Ground Type'
          }));
        }, 1000);

        return true;
      }
    };
  }]);
