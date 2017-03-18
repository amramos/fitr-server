var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
  name: String,
  description: String

});

var Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
