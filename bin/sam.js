#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('sam:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '8180');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Upgrade http server to socket.io server
 */

var socketio = require('socket.io').listen(server);
var io = require('../common/socket');
global.io = new io(socketio);

/*
io.sockets.on('connection', function(socket) {
	socket.emit('toclient', {msg:'Welcome!'});
	socket.on('fromclient', function(data) {
		socket.broadcast.emit('toclient', data);		// 자신을 제외하고 다른 클라이언트에게 보냄
		socket.emit('toclient', data);					// 해당 클라이언트에게만 보냄
		log.debug('Message from client:' + data.msg);
	})
})
global.io = io;
*/

/**
 * MQTT
 */
/*
var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://14.49.37.90');

client.on('connect', function () {
	client.subscribe('hello/world');
});

client.on('message', function (topic, message) {
	log.debug("sub > " + message.toString());
	log.debug('pub > publish');
	client.publish('hello/toto', 'from SAM Server');

	io.sockets.emit('toclient', {msg:'from SAM Server'});
});
global.client = client;
*/

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
