import mongoose from 'mongoose'

const Schema = mongoose.Schema

const studentUserSchema = new Schema({
  objective: String,
  measures: {
    type: [
      {
        date: Date,
        height: String,
        weight: String,
        fatness: String,
      },
    ],
    default: [],
  },
  trainings: [
    {
      sequence: Number,
      id: {
        type: Schema.Types.ObjectId,
        ref: 'Training',
      },
    },
  ],
  history: {
    type: [
      {
        checkin: Date,
        first: Date,
        last: Date,
        stars: Number,
        training: {
          type: Schema.Types.ObjectId,
          ref: 'Training',
        },
        exercises: {
          type: [
            {
              name: String,
              start: Date,
              finish: Date,
              stars: Number,
            },
          ],
        },
      },
    ],
    default: [],
  },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: 'InstructorUser',
  },
})

const StudentUser = mongoose.model('StudentUser', studentUserSchema)

export default StudentUser

