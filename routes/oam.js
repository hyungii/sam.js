var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
   res.render('index', { title: 'OAM'});
});

router.get('/health', function(req, res) {
	io.sockets.emit('toclient', {msg:process.pid + '/' + process.memoryUsage()});

    client.publish('hello/toto', 'health messag!!!!');

    res.send(new Buffer(JSON.stringify({
        pid: process.pid,
        memory: process.memoryUsage(),
        uptime: process.uptime()
    })));
});

router.get('/chat', function(req, res, next) {
	res.render('oam', { title: 'OAM'});
});

module.exports = router;
