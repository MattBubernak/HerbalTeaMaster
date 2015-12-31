var restful = require('node-restful'); // takes a mongoose model and converts it to a rest API. Handles CRUD operations.

module.exports = function(app,route){

    // Expose the methods we want avialable.
    var rest = restful.model(
        'user',
        app.models.user
    ).methods(['get','put','post','delete']);

    // Register this endpoint with the application.
    rest.register(app,route);

    // Return the middleware
    return function(req,res,next) {
        next();
    };
};

