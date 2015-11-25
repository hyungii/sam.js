var pgp = require('pg-promise');

function FarmService() {

    log.debug('FarmService this:' + this);

    if (!(this instanceof FarmService)) {
        log.debug('new FarmService');
        return new FarmService();
    }

    this.version = Math.floor(Math.random() * 65535);

};

FarmService.prototype.getFarm = function(farmNo, callback) {
//    db.query(sql.farm_info.selectByFarmNo, farmNo)
    db.query('select * from farm_iii', farmNo)
        .then(function (data) {
            log.debug("DATA:", data);
            callback(data);
        })
        .catch(function (error) {
            loge.debug(error);
            callback(null);
        })
        .finally(function () {
            pgp.end();
        });
}

module.exports = FarmService;
