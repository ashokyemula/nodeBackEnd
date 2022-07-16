
import express from "express";
//const express = require("express");
// const mongoose = require("mongoose");
import mongoose from "mongoose";
import Messages from './models/chatSchema.js';
import Pusher from 'pusher';
import cors from 'cors';


// App Config code below

const app = express();
const port = process.env.PORT || 5000

const pusher = new Pusher({
  appId: "1437923",
  key: "830f5078b6b531e39110",
  secret: "7eb6d43999eb617f2d86",
  cluster: "mt1",
  useTLS: true
});



// middleware
app.use(express.json());

app.use(cors());

// app.use((req,res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   next();
// });

// DB Config

var url = "mongodb+srv://ashokdb:guruji123@cluster0.fk7mwgq.mongodb.net/myFirstDB?retryWrites=true&w=majority"


mongoose.connect(url, {
                    
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                      } 
)

const db = mongoose.connection;
db.once("open", ()=> { 
                    console.log("Mongose DB Connection Made for Pusher");
                    const dbCollection = db.collection("mychats");
                    const changeStream = dbCollection.watch();

                    changeStream.on("change", (change) => {
                                console.log(change);
                                if (change.operationType === 'insert' ) {
                                  const msgBody = change.fullDocument;
                                  pusher.trigger('messages', 'inserted', {
                                    name: msgBody.user,
                                    message: msgBody.message,
                                    timestamp: msgBody.timestamp
                                  })
                                } else {
                                  console.log("Error Triggering Pusher!")
                                }
                    })

                    }
        );



  
// Create Routes below


app.get('/', (req, res) => res.status(200).send("Hello World"));

app.get('/messages/sync', (req, res) => {
      Messages.find( (err, data) => {
        if (err) {
          res.status(500).send(err); 
        } else {
            res.status(200).send(data);
        }
      })
})

app.post('/messages/new', (req, res) => {
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

