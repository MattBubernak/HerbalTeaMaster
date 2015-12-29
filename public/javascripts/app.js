console.log('hi');
var myApp = angular.module("myApp",['ngRoute','appRoutes','IngredientCtrl','MainCtrl']);
console.log('bye');

// This is the routing configuring for our application. We have 3 pages, a main recipes/search page, an
// ingredient listing page, and a page for creating recipes.
/*
myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/splash.html',
            controller: 'AppCtrl'
        })
        .when('/Recipes',{
            templateUrl: 'pages/recipes.html',
            controller: 'AppCtrl'

        })
        .when('/ingredientList',{
            templateUrl: 'pages/ingredientList.html',
            controller: 'AppCtrl'

        })
        .when('/ingredientAdd',{
            templateUrl: 'pages/ingredientAdd.html',
            controller: 'AppCtrl'

        })
    $locationProvider.html5Mode(true);
});
*/

/*
myApp.controller("AppCtrl",function ($http) {
    var app = this;
    var url = "http://localhost:3000";

    app.saveIngredient = function (newName,newDescription)
    {
        $http.post("http://localhost:3000/ingredient", {name:newName,description:newDescription}).success(function () {
            loadIngredients();
        })
    }
    function loadIngredients() {
        //app.ingredients = [{name:"hi",description:"bye"}];
        $http.get('http://localhost:3000/ingredient').success(function (ingredients) {
            app.ingredients = ingredients;
        }).error(function () { app.ingredients = [{name:"Faild to load ingredients"}]})
    }
    loadIngredients();
})
   */