/**
 * Created by socce on 1/1/2016.
 */
angular.module('DatabaseSrvc', []).service('DatabaseService', function($http,$q) {
    var ingredientsData = $q.defer();
    var recipesData = $q.defer();

    // Init reads all the data from the DB to be stored in this service.
    this.initData = function()
    {
        console.log('inited...');
        $http.get('http://localhost:3000/ingredient').then(function (data)
        {
            //ingredientsData = data.data;
            for (i = 0; i < data.data.length; i++)
            {
                data.data[i].owned = false;
            }
            ingredientsData.resolve(data.data);
        })
        $http.get('http://localhost:3000/recipe').then(function (data)
        {
            recipesData.resolve(data.data);
        })
    }

    this.getIngredients = function ()
    {
        console.log('called');
        return ingredientsData.promise
    }

    this.getRecipes = function ()
    {
        return recipesData.promise
    }


    this.initData();
    console.log('database service active');

})
