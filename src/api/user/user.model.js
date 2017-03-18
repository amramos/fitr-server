var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['instructor', 'student', 'gym'],
    default: 'student'
  },
  roleId: String
});


userSchema.plugin(passportLocalMongoose);

var User = mongoose.model('users', userSchema);

module.exports = User;
