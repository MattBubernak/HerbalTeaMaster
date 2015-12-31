/**
 * Created by socce on 12/30/2015.
 */
var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    userName: {
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
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    }
});

// Export it so that any modules that "require" Ingredient have access to it.
module.exports = UserSchema;
