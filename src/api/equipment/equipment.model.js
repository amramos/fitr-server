import mongoose from 'mongoose'

const Schema = mongoose.Schema

const equipmentSchema = new Schema({
  name: String,
  brand: String,
  description: String,
  exercises: [
    {
      name: String
    }
  ]

})

const Equipment = mongoose.model('Equipment', equipmentSchema)

export default Equipment
