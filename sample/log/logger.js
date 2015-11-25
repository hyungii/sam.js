var winston = require('winston');

var logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level : 'info'      // Winston console log level
        }),
        new winston.transports.File({
            level : 'debug',
            json : false,       // json 형식으로 로깅을 하지 
            filename: './sam.log'
        })
    ],
    exceptionHandler: [
        new winston.transports.File({
            filename: './error.log'
        })
    ]
});

exports.info = function(msg) {
    logger.info(msg);
};

exports.debug = function(msg) {
    logger.debug(msg);
};
