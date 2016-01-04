//server.js
// Matt Bubernak

// modules =================================================
var mongoose = require("mongoose");
var express = require('express');
var cors = require("cors");
var path = require( 'path' );
var methodOverride = require('method-override');
var bodyParser = require("body-parser");
var passport = require('passport'); // middleware for user auth
var localStrategy = require('passport-local');
var facebookStrategy = require('passport-facebook');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('connect-flash');
var _ = require("underscore");

// application =============================================
// We am express, and we am mean.
var app = express();


// configuration ===========================================
// Connect to our MONGO database
mongoose.connect('mongodb://localhost/TeaMasterDB');

app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
//app.use("/img/ingredient/",express.static('c:/Users/socce/Documents/Github/HerbalTeaMaster/public/img/ingredient'));
app.use(express.static('c:/Users/socce/Documents/Github/HerbalTeaMaster/public'));

// Necessary Middleware for the REST API.
app.use(cors()); // Allows for Cross Origin R Something requests.




// Models =============================================
// Load our models from the index file
app.models = require('../models/index');




// Routing Setup ======================================
// Routes for all of our models.
var routes = require('../routes/routes');

// Loops through each of our routes, call the function for each, and pass the controller/route
_.each(routes, function(controller,route) {
    console.log("route for: " + route);
    app.use(route, controller(app,route));
});

// Upload routing (via multer)
require('../routes/upload.js')(app);

// Frontend routing
require('../routes/frontend.js')(app);




// Start Server ======================================
// Listen on port 3000
app.listen(3000);

// expose app
exports = module.exports = app;
