//const mongoose  = require('mongoose');
import mongoose from "mongoose";

// const chatTemplate = new mongoose.Schema({

// const chatTemplate = mongoose.Schema({
   
//     chatName:{
//         type:String,
//         required:true
//     },

//     chatMessage: {
//         type: String,
//         required: true
//     },

//     date:{
//         type:Date,
//         default:Date.now
//     },
//     recieved: { type: boolean}
// })

const chatTemplate = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean

})

//module.exports = mongoose.model('myChats', chatTemplate);
export default mongoose.model('mychats', chatTemplate);