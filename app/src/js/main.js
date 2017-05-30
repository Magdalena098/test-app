'use strict';

var app = angular.module('app', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'views/partial-home.html',
            controller: 'ajaxCtrl' 
        })

        .state('recipes', {
            url: '/recipes/:id',
            templateUrl: 'views/partial-home-item.html',
            controller: 'detailsCtrl'
        });
        
});






