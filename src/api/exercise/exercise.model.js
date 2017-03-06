var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Exercise = new Schema({
    student: {
        type:String,
        required:true
    },
    name: String,
    repetitions: Number,
    sets: Number,
    group: String,
    weekDay: {
        type: String,
        enum: ["Sunday"
            , "Monday"
            , "Tuesday"
            , "Wednesday"
            , "Thursday"
            , "Friday"
            , "Saturday"]
    }
});


module.exports = mongoose.model('exercise', Exercise);
