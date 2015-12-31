/**
 * Created by socce on 12/28/2015.
 */
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/splash.html',
            controller: 'MainController'
        })
        .when('/ingredientList',{
            templateUrl: 'pages/ingredientList.html',
            controller: 'IngredientController'

        })
        .when('/ingredientAdd',{
            templateUrl: 'pages/ingredientAdd.html',
            controller: 'IngredientController'

        })
        .when('/recipeList',{
            templateUrl: 'pages/recipeList.html',
            controller: 'RecipeController'
        })
        .when('/recipeAdd',{
            templateUrl: 'pages/recipeAdd.html',
            controller: 'RecipeController'
        })
        .when('/userSignup',{
            templateUrl: 'pages/userSignup.html',
            controller: 'MainController'

        })
    $locationProvider.html5Mode(true);

}]);