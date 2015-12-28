var test = angular.module("test",[]);

test.controller("AppCtrl",function ($http) {
    var app = this;
    var url = "http://localhost:3000";

    app.saveIngredient = function (newName,newDescription)
    {
        $http.post("http://localhost:3000/add", {name:newName,description:newDescription}).success(function () {
            loadIngredients();
        })
    }
    function loadIngredients() {
        $http.get("http://localhost:3000/data/ingredients").success(function (ingredients) {
            app.ingredients = ingredients;
        })
    }
    loadIngredients();
})