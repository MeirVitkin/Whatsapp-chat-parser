const mongoose = require("mongoose");



const messagesSchema = new mongoose.Schema({
    // sender:{
    //     type
    // }
    // sender, messages: [{ date, message }], isQuestion
   

});


const chatModel = mongoose.model('tempMessages', messagesSchema)

module.exports = chatModel;