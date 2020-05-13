//the public folder is the front end

const express = require('express');
const socket = require('socket.io');

const app = express();

const server = app.listen(3000,function(){
    console.log('I am listening to port 3000')
});

app.use(express.static('public'));

//socket set up
const io = socket(server);

io.on('connection', function(socket){
    console.log('socket connection made', socket.id);
})