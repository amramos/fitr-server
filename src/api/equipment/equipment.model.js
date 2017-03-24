var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var equipmentSchema = new Schema({
  name: String,
  brand: String,
  description: String,
  exercises: [
    {
      name: String
    }
  ]

});
 
var Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
