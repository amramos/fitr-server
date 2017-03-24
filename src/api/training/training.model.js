import mongoose from 'mongoose'

const Schema = mongoose.Schema

const trainingSchema = new Schema({
  name: String,
  specialty: String,
  exercises: [
    {
      name: String,
      sets: Number,
      repetitions: Number,
      notes: String,
    },
  ],
})

const Training = mongoose.model('Training', trainingSchema)

export default Training
