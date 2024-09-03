import { editedQaModel } from "../models/editedQa.model.js"

export const create = (qa) => editedQaModel.create(qa)
export const read = (filter) => editedQaModel.find(filter).sort({ date: 1 })
export const readOne = (filter) => editedQaModel.findOne(filter)
export const update = (id, data) => editedQaModel.findByIdAndUpdate({ _id: id }, data, { new: true })
export const del = (id) => editedQaModel.deleteOne({ _id: id })
