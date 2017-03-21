var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');

var user = require('./api/user');
var exercise = require('./api/exercise');


module.exports = function(app){
  app.use('/user', user);
 
  // application 
  // se fosse colocar o front no mesmo rep, ou se a gente precisar de páginas administrativas
  app.get('*', function(req, res) {
      res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
}
