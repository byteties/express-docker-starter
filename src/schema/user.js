import mongoose from 'mongoose'

const SchemaModel = mongoose.Schema

const userSchema = new SchemaModel({
  name:{ type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const userModel = mongoose.model('user', userSchema)

export default userModel

