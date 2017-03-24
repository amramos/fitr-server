import mongoose from 'mongoose'

const Schema = mongoose.Schema

const instructorUserSchema = new Schema({
  gym: {
    type: Schema.Types.ObjectId,
    ref: 'InstructorUser'
  }
})


const InstructorUser = mongoose.model('InstructorUser', instructorUserSchema)

export default InstructorUser
