'use strict';

angular.module('nashvillePokemonIndexApp', [
  'nashvillePokemonIndexApp.Services',
  'nashvillePokemonIndexApp.Controllers',
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
