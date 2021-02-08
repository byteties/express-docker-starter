import mongoose from 'mongoose'
import userModel from '../schema/user'

const add = async(req,res) =>{
  const { body } = req
  const userResult = await userModel.create(body)
  return res.send(userResult.toObject())
}

const update = async(req,res) =>{
  const { params,body} = req
  const { id } = params
  const categoryID = mongoose.Types.ObjectId(id)
  await userModel.findByIdAndUpdate({_id:categoryID},body)
  return res.send("Update successfully!!!").status(200)
}

const get = async (req,res) => {
  const { id } = req.params
  const categoryID = mongoose.Types.ObjectId(id)
  const userResult = await userModel.findById(categoryID)
  return res.send(userResult.toObject())
}

const getAll = async(req,res) =>{
  const userResult = await userModel.find({})
  return res.send(userResult)
}
export default{
  add,
  update,
  getAll,
  get
}