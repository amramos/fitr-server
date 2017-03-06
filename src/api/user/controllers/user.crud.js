var User = require('../user.model');
var mongoose = require('mongoose');
var passport = require('passport');
var exports = module.exports = {};

var Exercise = require('../../exercise/exercise.model');


exports.create = function(req, res){
  User.register(new User({ username: req.body.username }), req.body.password, function(err, account) {
    if (err) {
      return res.status(500).json({err: err})
    }
    passport.authenticate('local')(req, res, function () {
      return res.status(200).json({status: 'Registration successful!'})
    });
  });
}


exports.getExercisesFromUser = function(req, res){
  console.log('req ', req.body);
  var userId = req.params.userId;
  console.log(' req.params', req.params);
  Exercise.find({student:userId}, function(err, exercises){
    if (err) {
      return res.status(500).json({err: err})
    }
      return res.status(200).json(exercises)
  })
};