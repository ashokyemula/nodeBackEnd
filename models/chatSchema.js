const mongoose  = require('mongoose');

const chatTemplate = new mongoose.Schema({
   
    chatName:{
        type:String,
        required:true
    },

    chatMessage: {
        type: String,
        required: true
    },

    date:{
        type:Date,
        default:Date.now
    }
})



module.exports = mongoose.model('myChats', chatTemplate);