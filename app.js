// setup config
global.config = require('./config/config');

// setup logging
var Logger = require(__dirname + '/common/logger');
global.log  = new Logger(__dirname + "/logs/server.log");
global.loge = new Logger(__dirname + "/logs/exception.log");

// setup sql
global.sql = require('./config/sql');

// setup database client
var db = require(__dirname + '/common/db');
global.db = new db(
    config.db.host,
    config.db.port,
    config.db.database,
    config.db.user,
    config.db.password
);

// setup mqtt client
var client = require(__dirname + '/common/mqtt');
global.client = new client('mqtt://14.49.37.90');

// setup mongodb
//var MongoClient = require('mongodb').MongoClient;
//var Server = require('mongodb').Server;
//
//var mongoClient 
//    = new MongoClient(new Server('localhost', 27017, {'native_parser':true}));
//global.mongoDb = mongoClient.db('test');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var _ = require('underscore');

var routes = require('./routes/index');
var user = require('./routes/user');
var farm = require('./routes/farm');
var oam = require('./routes/oam');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  if (!_.isEmpty(req.body)) {
    log.debug(req.body); // populated!
  }
  next();
})

app.use('/', routes);
app.use('/users', user);
app.use('/farms', farm);
app.use('/oam', oam);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
/*
if (app.get('env') === 'development') {
    log.debug('=================== development');
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
*/

/*
var JSONError = require('./common/JSONError');
*/

// Json error handler
app.use(function(err, req, res, next) {
    log.debug('=================== JSON');
    res.status(err.status).json({
        status: err.status,
        message: err.message
    });
});

/*
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
*/

module.exports = app;
