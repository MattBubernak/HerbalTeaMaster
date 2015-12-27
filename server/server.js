var express = require('express');
var mongoose = require("mongoose");
var cors = require("cors");
mongoose.connect('mongodb://localhost/jetbrains');
var bodyParser = require("body-parser");

var app = express();
app.use(cors());
app.use(bodyParser());



// ===================
// MONGO DB STRUCTURES
// ===================

// Ingredient
var ingredientSchema = new mongoose.Schema({
    name: { type: String},
    description: String
});
// This is the constructor used to instantiate an ingredient.
var Ingredient = mongoose.model('Ingredient',ingredientSchema);

// TODO: Add recipes.
var recipeSchema = new mongoose.Schema({

});
var Recipe = mongoose.model('Recipe',recipeSchema);

populateIngredientsDB();


function populateIngredientsDB(){
    var names = ['Hibiscus','Ginber','GreenTea','BlackTea','Chamomile','Cinnamon','Rose Pedals','Orange Peel'];
    var descriptions = ["it's good","it's bad","tasty","fresh","not very good","just an OK ingredient","pretty awesome","very interesting flavor"];
    for (i = 0; i < 8; i++)
    {
        var tester = new Ingredient({name:names[i],description:descriptions[i]});
        tester.save(function(err) {
            if(err) {
                console.log('fialed');
            }else{
                console.log('saved');
            }
        });
    }
}

// TODO: add default recipe population.
function populateRecipesDB(){

}

app.get("/",function(req,res){
    Ingredient.find(function (err,ingredients) {
        res.send(ingredients);
    })
});



// ==============
// GET ENDPOINTS
// ==============

// GET Endpoint for retrieving the recipes.
app.get("/data/recipes",function(req,res){
    Recipe.find(function (err,ingredients) {
        res.send(ingredients);
    })
});

// GET Endpoint for retrieving the ingredients.
app.get("/data/ingredients",function(req,res){
    Ingredient.find(function (err,ingredients) {
        res.send(ingredients);
    })
});



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