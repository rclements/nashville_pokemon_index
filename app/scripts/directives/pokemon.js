angular.module('nashvillePokemonIndexApp')
  .directive('pokemon', [function(){
    return {
      restrict: 'E',
      scope: {
        data: '='
      },
      templateUrl: 'templates/pokemon.html',
      link: function($scope, element, attrs){
        $scope.sayMyName = function(){ alert($scope.data.name); };
        return true;
      }
    };
  }]);
