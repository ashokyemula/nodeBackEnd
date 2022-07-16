const express = require("express");
//import express from "express";

const mongoose = require("mongoose");

import Messages from '../models/chatSchema.js';
//import mongoose from "mongoose";

//var MongoClient = require('mongodb').MongoClient;



// const router = express.Router();
// const chatTemplateCopy = require('./models/chatSchema');

// App Config code below

const app = express();
const port = process.env.PORT || 5000

//app.use(express.json());

// middleware


// DB Config

var url = "mongodb+srv://ashokdb:guruji123@cluster0.fk7mwgq.mongodb.net/myFirstDB?retryWrites=true&w=majority"


mongoose.connect(url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
} )

  
// MongoClient.connect(url, function(err, db) {
//     if (err)  throw err ;

//     console.log("Mongo DB Connection made!");

//     const db1 = mongoose.connection;
    //db1.collection("myChats");
 
    // db1.once("open", function() {
    //         const messageCollection = db1.collection("myChats");
    //         const changeStream = messageCollection.watch();
    // } )

    // router.post('/createRoom', (request, response) => {

    //   console.log("DB Connection made to path - createRoom!");
    //   db1.collection("myIntRooms").insertOne(roomInfo, function(err, res) {
    //     if (err) throw err ;
    //     console.log("one row inserted");
    //   })
    // }
    // );



//     app.post("/messages/new", (req, res) =>  {
//       const dbMessage = req.body;
//       chatTemplateCopy.create(dbMessage, (err, data) => { 
//             if (err) { res.status(500).send(err)}
//             else { 
//               res.status(201).send(`New message created ${data}`)
//             }
//       } )
// })

    
  //  });
  
// Create Routes below


app.get('/', (req, res) => res.status(200).send("Hello World"));

app.post('/api/v1/messages/new', (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(`new message created: \n ${data}`)
    }
  })
})


// Start the Listener


app.listen(port, ()=>{
    console.log(`Listening on localhost:${port}`);
});

