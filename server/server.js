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
var session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var _ = require("underscore");

// application =============================================
var app = express();


// configuration ===========================================
mongoose.connect('mongodb://localhost/TeaMasterDB');


// passport configuration ==================================

app.use(logger('combined'));
app.use(cookieParser());
app.use(session({secret: 'supernova', saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());
// Session-persisted message middleware
app.use(function(req, res, next){
    var err = req.session.error,
        msg = req.session.notice,
        success = req.session.success;

    delete req.session.error;
    delete req.session.success;
    delete req.session.notice;

    if (err) res.locals.error = err;
    if (msg) res.locals.notice = msg;
    if (success) res.locals.success = success;

    next();
});



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


// backend routes =========================================================

// GET Endpoint for retrieving the recipes.
//app.get("/recipe",function(req,res){
//    Recipe.find(function (err,ingredients) {
//        res.send(ingredients);
//    })
//});

// GET Endpoint for retrieving the ingredients.
//app.get("/ingredient",function(req,res){
//    app.models.ingredient.find(function (err,ingredients) {
//        res.send(ingredients);
//    })
//});


// POST Endpoint for adding an ingredient.
//app.post("/add", function(req,res) {
//    var name = req.body.name;
//    var description = req.body.description;
//    var ingredient = new Ingredient({name:name,description:description});
//    ingredient.save(function (err) {
//        res.send();
//    })
//})
// POST Endpoint for adding an ingredient.