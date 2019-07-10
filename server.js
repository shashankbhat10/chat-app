// var express = require('express');
// var app = express();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
// var ip = require('ip');


var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var ip = require('ip');

app.get('/', function(req,res){
    res.sendFile("index.html", { "root": __dirname });
});


io.on('connection', function (socket){ 
    console.log('user connected');
    
    socket.on('chat message', function (msg){ 
        io.emit('chat message', msg);
    });
        
    socket.on('disconnect', function (){ 
        console.log('user disconnected');
    });
});

http.listen(3000, function(){
    console.log('Node Server is setup and it is listening on http://" + ip.address() +":3000"');
});

// http.listen(4000,function(){
//     console.log("Node Server is setup and it is listening on http://" + ip.address() +":8080");
// })
