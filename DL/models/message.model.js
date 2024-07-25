import mongoose from 'mongoose';

const messagesSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    sender: { type: String },
    message: { type: String, required: true },
    isQuestion: { type: Boolean, required: true },
    isEdited: { type: Boolean, default: false },

}, { timestamps: true });


export const messageModel = mongoose.model('tempMessages', messagesSchema)
