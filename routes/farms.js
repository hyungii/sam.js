var express = require('express');
var router = express.Router();

var pgp = require('pg-promise');

var JSONError = require('../common/JSONError');

// create
router.post('/', function(req, res, next) {
//	res.json({'result':'success'});

	res.status(400).send('Current password does not match');
});

// read many
router.get('/', function(req, res, next) {
    db.query(sql.farm_info.selectByFarmNo, 1001)
        .then(function (data) {
            log.debug("DATA:", data);
            res.json({'farms':data});
        })
        .catch(function (error) {
            loge.error(error);
        })
        .finally(function () {
            pgp.end();
        });
});

// read one
router.get('/:farm_no', function(req, res, next) {
	log.debug(req.params.farm_no);
	res.json({'result':'success'});
});

// update many
router.put('/', function(req, res, next) {
	res.json({'result':'success'});
});

// update one
router.put('/:farm_no', function(req, res, next) {
	log.debug(req.params.farm_no);
	res.json({'result':'success'});
});

// delete many
router.delete('/', function(req, res, next) {
//	res.json({'result':'success'});

	var err = new JSONError(404, 'Cant find something');
	next(err);
});

// delete one
router.delete('/:farm_no', function(req, res, next) {
	log.debug(req.params.farm_no);
	res.json({'result':'success'});
});

module.exports = router;
