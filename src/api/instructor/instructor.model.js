var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../user/user.model');

var instructorUserSchema = new Schema(
  {
    gym: {
      type: Schema.Types.ObjectId, 
      ref: 'InstructorUser' 
    }

  });


var InstructorUser = mongoose.model('InstructorUser', gymUserSchema);

module.exports = InstructorUser;
