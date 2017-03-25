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

  const updateQuery = {
    name,
    specialty,
    exercises
  }

  const options = {
    new: true
  }

  Training.findByIdAndUpdate(trainingId, updateQuery, options, (err, savedTraining) => {
    if (err) {
      res.status(500).json(err)
    }
    res.status(200).json(savedTraining)
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
