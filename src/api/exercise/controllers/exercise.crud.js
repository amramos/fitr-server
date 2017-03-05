var Exercise = require('../exercise.model.js');
var mongoose = require('mongoose');
var passport = require('passport');
var exports = module.exports = {};


exports.create = function(req, res){
  console.log(' req',req.body );
  var newExercise = new Exercise({
    studentId: req.body.studentId,
    name: req.body.name,
    repetitions: req.body.repetitions,
    sets: req.body.sets,
    group:req.body.group,
    weekDay: req.weekDay
  });

  newExercise.save(function(err, exercise){
        if (err) {
          return res.status(500).json({err: err})
        }
        return res.status(200).json(exercise)
  });
};

exports.show = function(req, res){
  var exerciseId = req.params.exerciseId;
  Exercise.findById(exerciseId, function(err, exercise){
    if (err) {
      return res.status(500).json({err: err})
    }
    return res.status(200).json(exercise)
  })
};

exports.edit = function(req, res){
  var exerciseId = req.params.exerciseId;
  Exercise.findById(exerciseId, function(err, exercise){
    if (err) {
      return res.status(500).json({err: err})
    }
        exercise.name= req.body.name;
        exercise.repetitions= req.body.repetitions;
        exercise.sets= req.body.sets;
        exercise.group=req.body.group;
        exercise.weekDay= req.weekDay;

    exercise.save(function(err, exercise){
      if (err) {
        return res.status(500).json({err: err})
      }
      return res.status(200).json(exercise)
    })

  })
};

exports.delete = function(req, res){
  var exerciseId = req.params.exerciseId;
  Exercise.remove({ _id: exerciseId }, function(err) {
    if (err) {
      return res.status(500).json({err: err})
    }
    else {
    return res.status(200).json('record deleted')
    }
  });
};
//todo: abstrair esses handlers de resposta