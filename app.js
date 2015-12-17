var app = angular.module('futaba-clone', ['ngRoute', 'firebase']);

//using ngRoute
app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            controller: 'BoardController',
            templateUrl: 'board.html'
        })
//        .otherwise({redirectTo: '/'})
});

app.controller("BoardController", function($scope, $firebaseObject) {

});