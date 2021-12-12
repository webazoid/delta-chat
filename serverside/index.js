const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use=(cors());

const server = http.createServer(app);

const ioTest = new Server(server, {
    cors:{
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    } 
})

ioTest.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);
    socket.on('join_room', (data)=>{
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`);


    })


    socket.on('disconnect', () =>{
        console.log('user disconnected!');

    });

});


server.listen(3001, ()=>{
    console.log("serverrrrr is running");

})