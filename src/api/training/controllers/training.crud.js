import Training from '../training.model'

export function create(req, res) {
  const { name, specialty, exercises } = req.body
  const newTraining = new Training({
    name,
    specialty,
    exercises,
  })

  newTraining.save((err, training) => {
    if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).json(training)
  })
}

export function show(req, res) {
  const { trainingId } = req.params
  Training.findById(trainingId, (err, training) => {
    if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).json(training)
  })
}

export function edit(req, res) {
  const { trainingId } = req.params
  const { name, specialty, exercises } = req.body

  Training.findById(trainingId, (err, training) => {
    if (err) {
      return res.status(500).json(err)
    }

    training.name = name
    training.specialty = specialty
    training.exercises = exercises

    training.save((saveErr, savedTraining) => {
      if (saveErr) {
        return res.status(500).json(saveErr)
      }
      return res.status(200).json(savedTraining)
    })
  })
}

export function remove(req, res) {
  const { trainingId } = req.params
  Training.remove({ _id: trainingId }, (err) => {
    if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).json('record deleted')
  })
}
