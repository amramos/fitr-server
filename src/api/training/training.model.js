var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trainingSchema = new Schema({
  name: String,
  specialty: String,
  exercises: [
    {
      name: String,
      sets: Number,
      repetitions: Number,
      notes: String
    }
  ]
});
 
var Training = mongoose.model('Training', trainingSchema);

module.exports = Training;
