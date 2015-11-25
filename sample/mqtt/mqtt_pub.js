var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://14.49.37.90');

client.on('connect', function () {
    console.log('pub > connect & publish');
	client.publish('hello/world', 'from Node.js !!!!!!!!!!!');
	client.end();
});
