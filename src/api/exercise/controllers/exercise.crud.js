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
  Exercise.findById(exerciseId, (err, exercise) => {
    if (err) {
      return res.status(500).json(err)
    }
    exercise.name = name
    exercise.description = description

    exercise.save((exerciseErr, savedExercise) => {
      if (exerciseErr) {
        return res.status(500).json(exerciseErr)
      }
      return res.status(200).json(savedExercise)
    })
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

