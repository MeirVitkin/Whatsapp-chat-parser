import { messageModel } from "../models/message.model.js"

export const create = (message) => messageModel.create(message)
export const read = (filter) => messageModel.find(filter)
export const readOne = (filter) => messageModel.findOne(filter)
export const update = (id, data) => messageModel.findByIdAndUpdate({ _id: id }, data, { new: true })
export const del = (id) => messageModel.deleteOne({ _id: id })
