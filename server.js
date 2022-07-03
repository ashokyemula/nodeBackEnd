const express = require("express");
const mongoose = require("mongoose");
var MongoClient = require('mongodb').MongoClient;


const router = express.Router();
const chatTemplateCopy = require('./models/chatSchema');

const app = express();
app.use(express.json());




  var url = "mongodb+srv://ashokdb:guruji123@cluster0.fk7mwgq.mongodb.net/?retryWrites=true&w=majority"
  
  MongoClient.connect(url, function(err, db) {
    if (err)  throw err ;

    console.log("Mongo DB Connection made!");

    // var db1 = db.db("mySecondDB");
    console.log("Database Connected!");

    const db1 = mongoose.connection;
    //db1.collection("myChats");
 
    db1.once("open", function() {
            const messageCollection = db1.collection("myChats");
            const changeStream = messageCollection.watch();
    } )

    router.post('/createRoom', (request, response) => {

      console.log("DB Connection Created!");
      db1.collection("myIntRooms").insertOne(roomInfo, function(err, res) {
        if (err) throw err ;
        console.log("one row inserted");
      })
    }
    );



    app.post("/messages/new", (req, res) =>  {
      const dbMessage = req.body;
      chatTemplateCopy.create(dbMessage, (err, data) => { 
            if (err) { res.status(500).send(err)}
            else { 
              res.status(201).send(`New message created ${data}`)
            }
      } )
})

    
   });
  



   app.listen(5000, ()=>{
    console.log("Server Started!")
})

