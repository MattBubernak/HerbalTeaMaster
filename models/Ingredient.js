// Ingredient.js
//
//
var mongoose = require("mongoose");

var IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    imageID: {
        type: String,
        required: false
    }
});

// Export it so that any modules that "require" Ingredient have access to it.
module.exports = IngredientSchema;
