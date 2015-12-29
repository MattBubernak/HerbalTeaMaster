/**
 * Created by socce on 12/28/2015.
 */
angular.module('IngredientCtrl', []).controller('IngredientController', function($scope,$http) {

    var app = this;
    var url = "http://localhost:3000";
    app.showSuccess = false;
    app.showFailed = false;

    app.saveIngredient = function (newName,newDescription)
    {
        $http.post("http://localhost:3000/ingredient", {name:newName,description:newDescription}).success(function () {
            console.log("sent a new ingredient");
            app.showSuccess = true;
        }).error(function() {
            app.showFailed = true;
        })
    }
    function loadIngredients() {
        $http.get('http://localhost:3000/ingredient').success(function (ingredients) {
            app.ingredients = ingredients;
        }).error(function () { app.ingredients = [{name:"Faild to load ingredients"}]})
    }
    loadIngredients();

});