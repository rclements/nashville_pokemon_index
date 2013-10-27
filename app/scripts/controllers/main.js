'use strict';

angular.module('nashvillePokemonIndexApp.Controllers', [])
  .controller('MainCtrl', ['$scope', function($scope) {
    $scope.displayedPokemon = undefined;

    $scope.$on('showPokemon', function(topic, pokemon) {
      $scope.displayedPokemon = pokemon;
    });
  }]);
