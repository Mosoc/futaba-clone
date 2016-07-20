var app = angular.module('app', ['ngRoute', 'firebase']);

//using ngRoute
app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            controller: 'BoardController',
            templateUrl: 'board.html'
        })
        .otherwise({redirectTo: '/'})
});

app.controller("BoardCtrl", function() {
    var self = this;
    self.example = 123;

});