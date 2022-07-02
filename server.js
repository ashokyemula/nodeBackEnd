const express = require("express");
const mongoose = require("mongoose");
var MongoClient = require('mongodb').MongoClient;


const router = express.Router();
//const roomsTemplateCopy = require('../models');






const app = express();
app.use(express.json());

// mongoose.connect("mongodb+srv://ashokdb:guruji123@cluster0.fk7mwgq.mongodb.net/?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   });



  var url = "mongodb+srv://ashokdb:guruji123@cluster0.fk7mwgq.mongodb.net/?retryWrites=true&w=majority"
  
  MongoClient.connect(url, function(err, db) {
    if (err)  throw err ;

    console.log("Mongo DB Connection created!");

    var db1 = db.db("myFirstDB");
    console.log("Database Created!");

    // db1.createCollection("myIntRooms", function(err, res) { 
    //                                     if (err) throw err 
    //                                 });
     
    // var roomInfo = {
    //   roomType: "1234"
      
    // }

    

    router.post('/createRoom', (request, response) => {

      console.log("DB Connection Created!");
      db1.collection("myIntRooms").insertOne(roomInfo, function(err, res) {
        if (err) throw err ;
        console.log("one row inserted");
      });



      //response.send('send');
      // const signedUpUser = new roomsTemplateCopy ({
         
      //     roomName:request.body.roomName
          
      // })
  })


    
    // db.close();
  });


// const db = mongoose.connection();
// db.on("error", console.log("Error occurred!"));
// db.once("open", function() { console.log("DB Connected Successfully")} );

app.listen(5000, ()=>{
    console.log("Server Started!")
});

