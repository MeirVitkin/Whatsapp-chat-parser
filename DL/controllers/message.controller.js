import { whatsappMessagesModel } from "../models/message.model.js"

export const create = (message) => whatsappMessagesModel.create(message)
export const read = (filter) => whatsappMessagesModel.find(filter).sort({ date: 1 })
export const readOne = (filter) => whatsappMessagesModel.findOne(filter)
export const update = (id, data) => whatsappMessagesModel.findByIdAndUpdate({ _id: id }, data, { new: true })
export const del = (id) => whatsappMessagesModel.deleteOne({ _id: id })
