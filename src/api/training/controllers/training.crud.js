const Training = require('../training.model.js')
const mongoose = require('mongoose')
const passport = require('passport')

exports.create = function(req, res) {
  const { name, specialty, exercises } = req.body
  const newTraining = new Training({
    name: name,
    specialty: specialty,
    exercises: exercises
  })

  newTraining.save(function(err, training){
    if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).json(training)
  })
}

exports.show = function(req, res){
  const { trainingId } = req.params
  Training.findById(trainingId, function(err, training){
    if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).json(training)
  })
}

exports.edit = function(req, res) {
  const { trainingId } = req.params
  const { name, specialty, exercises } = req.body

  Training.findById(trainingId, function(err, training){
    if (err) {
      return res.status(500).json({err})
    }
    training.name = name
    training.specialty = specialty
    training.exercises = exercises

    training.save(function(err, training){
      if (err) {
        return res.status(500).json(err)
      }
      return res.status(200).json(training)
    })
  })
}

exports.delete = function(req, res) {
  const { trainingId } = req.params;
  Training.remove({ _id: trainingId }, function(err) {
    if (err) {
      return res.status(500).json(err)
    }
    else {
      return res.status(200).json('record deleted')
    }
  })
}
