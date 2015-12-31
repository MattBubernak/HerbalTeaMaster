//server.js


// modules =================================================
var mongoose = require("mongoose");
var express = require('express');
var cors = require("cors");
var path = require( 'path' );
var methodOverride = require('method-override');
var bodyParser = require("body-parser");
var passport = require('passport');
var localStrategy = require('passport-local');
var facebookStrategy = require('passport-facebook');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('connect-flash');
var _ = require("underscore");

// application =============================================
var app = express();


// configuration ===========================================
mongoose.connect('mongodb://localhost/TeaMasterDB');


// passport configuration ==================================

// Configuring Passport
//app.use(expressSession({secret: 'mySecretKey'}));
//app.use(passport.initialize());
//app.use(passport.session());

// Using the flash middleware provided by connect-flash to store messages in session
// and displaying in templates
//var flash = require('connect-flash');
//app.use(flash());

// Initialize Passport
//var initPassport = require('../passport/init');
//initPassport(passport);


/*
passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});
*/


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


// routes =============================================
var routes = require('../routes/routes');


// models =============================================
app.models = require('../models/index');


// MIDDLEWARE =========================================

// Loops through each of our routes, call the function for each, and pass the controller/route
_.each(routes, function(controller,route) {
    console.log("route for: " + route);
    app.use(route, controller(app,route));
});

// Necessary Middleware for the REST API.
app.use(cors()); // Allows for Cross Origin R Something requests.


// frontend routes =========================================================
// route to handle all angular requests

app.get('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendfile('c:/Users/socce/Documents/Github/HerbalTeaMaster/public/index.html');
});

app.listen(3000);

// expose app
exports = module.exports = app;
