import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10)
})

export default mongoose.model('User', userSchema)
