import mongoose from 'mongoose'

const Schema = mongoose.Schema

const gymUserSchema = new Schema({
  students: [{
    student: {
      type: Schema.Types.ObjectId,
      ref: 'InstructorUser'
    },
    start: Date,
    finish: Date
  }],
  instructors: [{
    instructor: {
      type: Schema.Types.ObjectId,
      ref: 'InstructorUser'
    },
    start: Date,
    finish: Date
  }]
})


const GymUser = mongoose.model('GymUser', gymUserSchema)

export default GymUser
