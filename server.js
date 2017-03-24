// set up ========================

import express from 'express'
import { Strategy as LocalStrategy } from 'passport-local'
import mongoose from 'mongoose' //mongoose fro mongodb
import morgan from 'morgan' //log requests to the console
import bodyParser from 'body-parser' // pull information from HTML POST (express4)
import methodOverride from 'method-override' // simulate DELETE and PUT (express4)
import cookieParser from 'cookie-parser'
import passport from 'passport'

import database from './config/database'
import User from './src/api/user/user.model'
import Routes from './src/routes'

let app = express() // create our app w/ express


// configuration =================
mongoose.connect(database.url);

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride());

//var User = require('./src/api/user/user.model');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


Routes(app)

 // listen (start app with node server.js) ======================================
 app.listen(process.env.PORT || 5000);
 console.log("App listening on port " + (process.env.PORT || 5000));
