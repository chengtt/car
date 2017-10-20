
var app = angular.module("app", ["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('server',{
            url:"/server",
            templateUrl:"./App/View/server.html"
        })
        .state('finance',{
            url:"/finance",
            templateUrl:"./App/View/finance.html"
        });
    $urlRouterProvider.otherwise('/server')
});