/**
 * Created by socce on 12/28/2015.
 */
angular.module('IngredientCtrl', []).controller('IngredientController', function($scope,$http) {

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

});