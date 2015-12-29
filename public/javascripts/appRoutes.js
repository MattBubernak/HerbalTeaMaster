/**
 * Created by socce on 12/28/2015.
 */
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/splash.html',
            controller: 'MainController'
        })
        .when('/Recipes',{
            templateUrl: 'pages/recipes.html',
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

    $locationProvider.html5Mode(true);

}]);