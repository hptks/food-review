import mongoose from 'mongoose'

const Schema = mongoose.Schema

let userSchema = new Schema({
  name: String,
  email: String,
  username: String,
  password: String
})

const User = mongoose.model('User', userSchema)

export default User
