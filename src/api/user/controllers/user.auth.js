var User = require('../user.model');
var mongoose = require('mongoose');
var passport = require('passport');
var exports = module.exports = {};
var student = require('../../student');

exports.login = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err) }
    if (!user) {
      return res.status(401).json({err: info})
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({err: 'Could not log in user'})
      }

      student.get(user.roleId)
        .then(stud => {
          res.status(200).json({status: 'Login successful!', id: user._id, role: 'student', data: stud})
        }, () => res.status(500).json({err: 'Erro ao obter dados do usuário'}));
    });
  })(req, res, next);
}
