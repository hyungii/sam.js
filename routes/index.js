var express = require('express');
var router = express.Router();

//router.get('/', function(req, res, next) {
//    res.render('index', { title: 'Express' });
//});

router.get('/', function(req, res, next) {
    res.sendfile('../public/index.html');
});

module.exports = router;
