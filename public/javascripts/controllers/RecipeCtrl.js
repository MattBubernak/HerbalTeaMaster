/**
 * Created by socce on 12/30/2015.
 */
/**
 * Created by socce on 12/28/2015.
 */
angular.module('RecipeCtrl', []).controller('RecipeController', function($scope,$http) {

     var app = this;
     var url = "http://localhost:3000";
     app.showSuccess = false;
     app.showFailed = false;
     app.nameSearchInput = "";

     app.saveRecipe = function (newName,newDescription,newImgID)
     {
     $http.post("http://localhost:3000/recipe", {name:newName,description:newDescription,imageID:newImgID,ingredients:[1,5,2]}).success(function () {
               console.log("sent a new recipe");
               app.showSuccess = true;
          }).error(function() {
               app.showFailed = true;
          })
     };

     function loadRecipes() {
          $http.get('http://localhost:3000/recipe').success(function (recipes) {
          app.recipes = recipes;
          }).error(function () { app.recipes = [{name:"Failed to load recipes"}]})
     }
     loadRecipes();

});