module.exports = function(io) {

    io.sockets.on('connection', function(socket) {
	    socket.emit('toclient', {msg:'Welcome!'});
        socket.on('fromclient', function(data) {
            socket.broadcast.emit('toclient', data);		// 자신을 제외하고 다른 클라이언트에게 보냄
            socket.emit('toclient', data);					// 해당 클라이언트에게만 보냄
            log.debug('Message from client:' + data.msg);
        })
    })

    return io;
};
