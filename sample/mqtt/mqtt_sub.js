var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://14.49.37.90');

client.on('connect', function () {
//	client.subscribe('hello/world');
	client.subscribe('hello/toto');
});

client.on('message', function (topic, message) {
	console.log("sub > " + message.toString());
});
