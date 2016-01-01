/**
 * Created by socce on 12/28/2015.
 */
angular.module('IngredientCtrl', []).controller('IngredientController', ['$scope','DatabaseService', function($scope,DatabaseService) {

    var app = this;
    var url = "http://localhost:3000";
    app.showSuccess = false;
    app.showFailed = false;
    app.nameSearchInput = "";
    app.ingredients = [];

    app.loadIngredients = function ()
    {
        var ingredientsPromise = DatabaseService.getIngredients();
        ingredientsPromise.then(function (data) {
                app.ingredients = data;
            }, function (error) {
                app.ingredients = []
            }
        )
    }

    app.saveIngredient = function (newName,newDescription,newImgID)
    {
        $http.post("http://localhost:3000/ingredient", {name:newName,description:newDescription,imageID:newImgID}).success(function () {
            console.log("sent a new ingredient");
            app.showSuccess = true;
        }).error(function() {
            app.showFailed = true;
        })
    }

    app.loadIngredients();

}]);