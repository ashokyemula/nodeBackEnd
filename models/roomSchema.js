const mongoose  = require('mongoose');

const roomsTemplate = new mongoose.Schema({
   
    roomName:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        default:Date.now
    }
})



module.exports = mongoose.model('myRooms', roomsTemplate);