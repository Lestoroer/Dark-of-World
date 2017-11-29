//node
var WebSocketServer = new require('ws');

// подключенные клиенты
var clients = {};

var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public', {
	etag: false,
	setHeaders: function(res, path) {
		res.setHeader('Cache-Control', 'no-cache')
	},
	maxage: 0
}));


app.get('/', function (req, res, next) {
	try {
		res.sendfile('./index.html');
	} catch (e) {
		next(e);
	}
});

app.listen(8080, function () {
	console.log('Listening');
});


// WebSocket-сервер на порту 8081
var webSocketServer = new WebSocketServer.Server({
	port: 8081
});
webSocketServer.on('connection', function(ws) {

	var id = Math.random();
	clients[id] = ws;
	console.log("новое соединение " + id);

	ws.on('message', function(message) {
		// console.log('return: ' + message);

		for (var key in clients) {
			clients[key].send(message);
		}
	});

	ws.on('close', function() {
		// console.log('соединение закрыто ' + id);
		delete clients[id];
	});

});