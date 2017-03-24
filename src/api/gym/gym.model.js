var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../user/user.model');

var gymUserSchema = new Schema(
  {
    students: [{
      student: {
        type: Schema.Types.ObjectId, 
        ref: 'InstructorUser' 
      },
      start: Date,
      finish: Date
    }],
    instructors: [{
      instructor: {
        type: Schema.Types.ObjectId, 
        ref: 'InstructorUser' 
      },
      start: Date,
      finish: Date
    }]
  });


var GymUser = mongoose.model('GymUser', gymUserSchema);

module.exports = GymUser;
