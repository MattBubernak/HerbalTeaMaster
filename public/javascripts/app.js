// Module Injection Information
// ============================
// ngRoute: module for routing
// appRoutes: module containing app-specific routes.
// IngredientsCtrl: used for ingredient related views
// ReicpeCtrl: used for recipe related views.
// MainCtrl: not currently used.

var myApp = angular.module("myApp",['ngRoute','DatabaseSrvc','appRoutes','IngredientCtrl','MainCtrl','RecipeCtrl','ngFileUpload']);
