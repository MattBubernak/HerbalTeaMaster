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
    app.file;

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

    app.saveIngredient = function (newName,newDescription,newImgID,file)
    {
        // TODO: Upload image(if provided)
        console.log("file:" + file);

        Upload.upload({
            url: '/upload', //upload.php script, node.js route, etc..
            method: 'POST', //Post or Put
            headers: {'Content-Type': 'multipart/form-data'},
            data: {file:file}
            //data: JsonObject, //from data to send along with the file
            //file: blob, // or list of files ($files) for html5 only
            //fileName: 'photo' // to modify the name of the file(s)
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