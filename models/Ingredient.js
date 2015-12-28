// Ingredient.js
//
//
var mongoose = require("mongoose");


// Ingredient Schema
// Components: Title, Description
var IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

// Export it so that any modules that "require" Ingredient have access to it.
module.exports = IngredientSchema;
