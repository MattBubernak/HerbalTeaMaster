/**
 * Created by socce on 12/30/2015.
 */
var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
    },
});

// Export it so that any modules that "require" Ingredient have access to it.
module.exports = UserSchema;
