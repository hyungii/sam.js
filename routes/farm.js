var express = require('express');
var router = express.Router();

var FarmService = require('../services/FarmService');

// create
router.post('/', function(req, res, next) {
//	res.json({'result':'success'});

	res.status(400).send('Current password does not match');
});

// read many
router.get('/', function(req, res, next) {
    var farmService = new FarmService();
    log.debug('farmService:'+farmService);
    var result = farmService.getFarm(1001, function(data) {
        log.debug('data:'+data);
        if (data === null) {
            next({'status':'380','message':'SQL Error'});
        }
        res.json(data);
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
	res.json({'result':'success'});

//	var err = new JSONError(404, 'Cant find something');
//	next(err);
});

// delete one
router.delete('/:farm_no', function(req, res, next) {
	log.debug(req.params.farm_no);
	res.json({'result':'success'});
});

module.exports = router;
