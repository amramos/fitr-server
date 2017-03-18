var User = require('../user.model');
var mongoose = require('mongoose');
var passport = require('passport');
var exports = module.exports = {};
var student = require('../../student');


function setRoleId(username, roleId){
  return new Promise((resolve, reject) => {
    var query = { username: username};
    User.findOneAndUpdate(query, { roleId: roleId}, function(err, user) {
      if(err){
        return reject(err);
      }

      return resolve(user);
    });
  });
}

exports.create = function(req, res){
  const username = req.body.username;
  const password = req.body.password;
  const role = req.body.role || 'student';

  User.register(new User({ username: username }), password, function(err, account) {
    if (err) {
      return res.status(500).json({err: err})
    }
    passport.authenticate('local')(req, res, function () {

      if (role === 'student') {
        student.create()
          .then(stud => stud._id)
          .then(roleId => setRoleId(username, roleId))
          .then(() => res.status(200).json({status: 'Registration successful!'}),
            (err) => res.status(500).json({error: err}));
      }
    });
  });
}


