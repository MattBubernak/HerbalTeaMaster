var mongoose = require("mongoose");
var express = require('express');
var cors = require("cors");

// The Application
var app = express();

// CORS support
/*
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
});
*/
var _ = require("underscore"); //TODO: lodash??
var bodyParser = require("body-parser");
//var Ingredient = require('../models/Ingredient.js');

// Connect to the database.
mongoose.connect('mongodb://localhost/TeaMasterDB');




// Load the routes
var routes = require('../routes/routes');



// Load the models
app.models = require('../models/index');


// ===================
// MIDDLEWARE
// ===================

// Loops through each of our routes, call the function for each, and pass the controller/route
_.each(routes, function(controller,route) {
    app.use(route, controller(app,route));
});

// Necessary Middleware for the REST API.
app.use(cors()); // Allows for Cross Origin R Something requests.
app.use(bodyParser()); // Allows for JSON parsing

// ===================


// ===================
// MONGO DB STRUCTURES
// ===================

// TODO: Add recipes.
var recipeSchema = new mongoose.Schema({

});
var Recipe = mongoose.model('Recipe',recipeSchema);


//populateIngredientsDB();

/*
function populateIngredientsDB(){
    var names = ['Hibiscus','Ginber','GreenTea','BlackTea','Chamomile','Cinnamon','Rose Pedals','Orange Peel'];
    var descriptions = ["it's good","it's bad","tasty","fresh","not very good","just an OK ingredient","pretty awesome","very interesting flavor"];
    for (i = 0; i < 8; i++)
    {
        //var tester = new app.models.ingredient.constructor({name:"hi"}) //({name:names[i],description:descriptions[i]});
        tester.save(function(err) {
            if(err) {
                console.log('fialed');
            }else{
                console.log('saved');
            }
        });
    }
}
*/

// TODO: add default recipe population.
function populateRecipesDB(){

}

/*
app.get("/",function(req,res){
    Ingredient.find(function (err,ingredients) {
        res.send(ingredients);
    })
});
*/



// ==============
// GET ENDPOINTS
// ==============

// GET Endpoint for retrieving the recipes.
app.get("/recipe",function(req,res){
    Recipe.find(function (err,ingredients) {
        res.send(ingredients);
    })
});

// GET Endpoint for retrieving the ingredients.
//app.get("/ingredient",function(req,res){
//    app.models.ingredient.find(function (err,ingredients) {
//        res.send(ingredients);
//    })
//});



// ==============
// POST ENDPOINTS
// ==============

// POST Endpoint for adding an ingredient.
app.post("/add", function(req,res) {
    var name = req.body.name;
    var description = req.body.description;
    var ingredient = new Ingredient({name:name,description:description});
    ingredient.save(function (err) {
        res.send();
    })
})
// POST Endpoint for adding an ingredient.

app.listen(3000);
