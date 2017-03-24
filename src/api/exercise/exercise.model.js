import mongoose from 'mongoose'

const Schema = mongoose.Schema

const exerciseSchema = new Schema({
  name: String,
  description: String
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

export default Exercise
