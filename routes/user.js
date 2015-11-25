var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    mongoDb.collection('users').findOne({}, function(err,doc) {
        if (err) throw err;
        res.send(doc);
    });
});

module.exports = router;
