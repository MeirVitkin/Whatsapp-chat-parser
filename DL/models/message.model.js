import mongoose from 'mongoose';

const messagesSchema = new mongoose.Schema({
    date: { type: Date, require: true },
    sender: { type: String },
    messages: { type: String, require: true },
    isQuestion: { type: Boolean, require: true },
    isEdited: { type: Boolean, default: false },

}, { timestamps: true });


export const messageModel = mongoose.model('tempMessages', messagesSchema)
