const path =require('path');
const express=require('express')
const http=require('http');
const socketio = require('socket.io');

const app = express()
const server=http.createServer(app)
const io=socketio(server)

const PORT = 3000 || process.env.PORT;

//set static folder
app.use(express.static(path.join(__dirname,"public")))

//run when client connects
io.on("connection",  socket=>{
    console.log("New WS connection...");
    socket.emit('message','welcome to Chatcord!')
})

server.listen(PORT,()=>console.log(`server is running on port ${PORT}`));
