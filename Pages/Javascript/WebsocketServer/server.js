const express = require("express");
const app = express();
const server = require('http').createServer(app);
const websocket = require('ws');

const wss = new websocket.Server({port:3000,host:"192.168.0.18"});


wss.on('connection',function connection(ws){
    ws.on('message',function icnoming(message){
        console.log(message);
    });
    ws.send("something");
});



app.get('/',(req,res) => res.send("Hello World"));


server.listen(3000,console.log("Listening on port: 3000"));