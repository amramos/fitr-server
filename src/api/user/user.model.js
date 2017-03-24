import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['instructor', 'student', 'gym'],
    default: 'student',
  },
  roleId: String,
})


userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('users', userSchema)

export default User
