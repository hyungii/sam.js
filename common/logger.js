var winston = require('winston');

module.exports = function(filename) {
    var logger = new winston.Logger({
        transports: [
            new winston.transports.Console({
                level: config.loglevel
            }),
            new winston.transports.File({
                level: config.loglevel,
                json: false,
                filename: filename
            })
        ]
    });
    logger.setLevels(winston.config.syslog.levels);
    logger.exitOnError = false;
    return logger;
};
