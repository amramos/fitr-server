var StudentUser = require('../student.model');
var mongoose = require('mongoose');
var passport = require('passport');
var exports = module.exports = {};

exports.create = function(){
  return new Promise((resolve, reject) => {
    var newStudent = new StudentUser({});
    newStudent.save(function(err, student){
      if (err) {
        return reject(err);
      }
      return resolve(student);
    });

  });
}

exports.get = function(id){
  return new Promise((resolve, reject) => {
    StudentUser.findById(id, function(err, student){
      if (err) {
        return reject(err);
      }
      return resolve(student);
    })
  });
}

