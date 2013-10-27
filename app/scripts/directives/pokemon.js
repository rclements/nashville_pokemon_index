angular.module('nashvillePokemonIndexApp')
  .directive('pokemon', [function(){
    return {
      restrict: 'E',
      scope: {
        data: '='
      },
      templateUrl: 'templates/pokemon.html',
      link: function($scope, element, attrs){
        $scope.getsJiggy = function(){ return true };
        return true;
      }
    };
  }]);
