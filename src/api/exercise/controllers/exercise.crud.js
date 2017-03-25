import Exercise from '../exercise.model'

export function create(req, res) {
  const newExercise = new Exercise({
    name: req.body.name,
    description: req.body.description
  })
  newExercise.save((err, exercise) => {
    if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).json(exercise)
  })
}

export function show(req, res) {
  const exerciseId = req.params.exerciseId
  Exercise.findById(exerciseId, (err, exercise) => {
    if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).json(exercise)
  })
}

export function edit(req, res) {
  const { exerciseId } = req.params
  const { name, description } = req.body

  const updateQuery = {
    name,
    description
  }

  // faz o objeto retornado no findByIdAndUpdate ser o novo
  const options = {
    new: true
  }

  Exercise.findByIdAndUpdate(exerciseId, updateQuery, options, (err, savedExercise) => {
    if (err) {
      res.status(500).json(err)
    }
    res.status(200).json(savedExercise)
  })
}

export function remove(req, res) {
  const exerciseId = req.params.exerciseId
  Exercise.remove({ _id: exerciseId }, (err) => {
    if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).json('record deleted')
  })
}
// todo: abstrair esses handlers de resposta

