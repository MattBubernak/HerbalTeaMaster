/**
 * Created by socce on 12/28/2015.
 */
angular.module('IngredientCtrl', []).controller('IngredientController', ['$scope','DatabaseService','Upload','$http', function($scope,DatabaseService,Upload,$http) {

    var app = this;
    var url = "http://localhost:3000";
    app.showSuccess = false;
    app.showFailed = false;
    app.nameSearchInput = "";
    app.ingredients = [];

    $scope.file;
    $scope.ingredientName = "";
    $scope.ingredientDescription = "";
    $scope.ingredientImageID = "";

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

    $scope.submit = function() {
        if ($scope.file) {
            console.log($scope.file);
            $scope.upload($scope.file);
        }
        else {
            console.log($scope.file);
        }
        console.log("file name: " + $scope.file.name);
        $scope.ingredientImageID = $scope.file.name;
        app.saveIngredient();
    };

    // upload on file select or drop
    $scope.upload = function (file) {
        Upload.upload({
            url: '/uploadIngredient',
            method: 'POST',
            arrayKey: '',
            data: {},
            file: file,
            headers: {'Content-Type': 'multipart/form-data'}
        }).then(function (resp) {
            console.log('Success. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ');
        });
    };

    app.saveIngredient = function()
    {
        // Upload ingredient
        $http.post("http://localhost:3000/ingredient", {name:$scope.ingredientName,description:$scope.ingredientDescription,imageID:$scope.ingredientImageID}).success(function () {
            console.log("sent a new ingredient");
            app.showSuccess = true;
        }).error(function() {
            app.showFailed = true;
        })
    }



    app.loadIngredients();

}]);