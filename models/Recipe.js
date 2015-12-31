// Recipe.js
//
//
var mongoose = require("mongoose");

var RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    ingredients: {
        type: Array,
        default: [],
        required: false
    },
    imageID: {
        type: String,
        default: "Placeholder.png",
        required: false
    }
});

// Export it so that any modules that "require" Ingredient have access to it.
module.exports = RecipeSchema;
