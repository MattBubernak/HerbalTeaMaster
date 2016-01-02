/**
 * Created by socce on 12/30/2015.
 */
/**
 * Created by socce on 12/28/2015.
 */
angular.module('RecipeCtrl', []).controller('RecipeController',['$scope','$http','DatabaseService', function($scope,$http,DatabaseService) {

     var app = this;
     var url = "http://localhost:3000";
     app.showSuccess = false;
     app.showFailed = false;
     app.nameSearchInput = "";
     app.recipes = [];

     app.saveRecipe = function (newName,newDescription,newImgID)
     {
     $http.post("http://localhost:3000/recipe", {name:newName,description:newDescription,imageID:newImgID,ingredients:['56847f1b79f107382293a6d7','56847fb61279dcac10e4e3dd']}).success(function () {
               console.log("sent a new recipe");
               app.showSuccess = true;
          }).error(function() {
               app.showFailed = true;
          })
     };

     function loadRecipes() {
          var recipesPromise = DatabaseService.getRecipes();
          var ingredientsPromise = DatabaseService.getIngredients();

          ingredientsPromise.then(function (data) {
                   app.ingredients = data;
              }, function (error) {
                   app.ingredients = []
              }
          );

          recipesPromise.then(function (data) {
                    app.recipes = data;
                    // Replace the id's with the actual objects.
                    for (var i = 0; i < app.recipes.length; i++)
                    {
                         app.recipes[i].ingredientObjs = [];
                         for (var j = 0; j < app.recipes[i].ingredients.length; j++)
                         {
                              app.recipes[i].ingredientObjs[j] = app.getIngrById(app.recipes[i].ingredients[j]);
                         }
                    }

              }, function (error) {
                   app.recipes = []
              }
          )
     }

     app.getIngrById = function (inID)
     {
          for (var i = 0; i < app.ingredients.length; i++)
          {
               if (app.ingredients[i]._id == inID)
                    return app.ingredients[i];
          }
          // should never hit this.
          console.log('Could not find:' + inID);
          return -1;
     }

     loadRecipes();

}]);