const Exercise = require('../exercise.model.js');
const mongoose = require('mongoose');
const passport = require('passport');

exports.create = function(req, res){
  var newExercise = new Exercise({
    name: req.body.name,
    description: req.body.description
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

exports.edit = function(req, res) {
  const { exerciseId } = req.params
  const { name, description } = req.body
  Exercise.findById(exerciseId, function(err, exercise){
    if (err) {
      return res.status(500).json({err: err})
    }
    exercise.name = name;
    exercise.description = description;

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
