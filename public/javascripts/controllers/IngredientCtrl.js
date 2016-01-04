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
    $scope.ingredientName = "Name";
    $scope.ingredientDescription = "None";

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
    };

    // upload on file select or drop
    $scope.upload = function (file) {
        Upload.upload({
            url: '/upload',
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

    app.saveIngredient = function (newName,newDescription,newImgID,file)
    {
        // TODO: Upload image(if provided)
        console.log("file:" + file);

        Upload.upload({
            url: '/upload',
            file: $scope.file
        }).success(function (response, status) {
                console.log('made it');
            }
        ).error(function (err) {
                console.log('didnt make it');
            }
        );
        // Upload ingredient
        $http.post("http://localhost:3000/ingredient", {name:newName,description:newDescription,imageID:newImgID}).success(function () {
            console.log("sent a new ingredient");
            app.showSuccess = true;
        }).error(function() {
            app.showFailed = true;
        })
    }



    app.loadIngredients();

}]);