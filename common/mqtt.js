var mqtt = require('mqtt');

module.exports = function(host) {
    var client  = mqtt.connect(host);

    client.on('connect', function () {
	    client.subscribe('hello/world');
        client.subscribe('snsr/tmpr');
    });

    client.on('message', function (topic, message) {
	    log.debug("sub > " + message.toString());
	    log.debug('pub > publish');
	    client.publish('hello/toto', 'from SAM Server');
    });

    return client;
};
