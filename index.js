var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendfile('index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
	socket.on('chat message', function(msg){
		console.log('message: ' + msg);
	});
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
});


http.listen(8080, function(){
	console.log('Listening con localhost:8080')
});