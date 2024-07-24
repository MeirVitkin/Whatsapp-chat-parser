import mongoose from 'mongoose';

const messagesSchema = new mongoose.Schema({
    sender: { type: String, require: true },
    messages: [{ date: { type: String, require: true }, message: { type: String, require: true } }],
    isQuestion: { type: Boolean, require: true },
    isEdited: { type: Boolean, default: false },

});


export const messageModel  = mongoose.model('tempMessages', messagesSchema)
