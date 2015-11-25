var config = require('../../config/config');
var sql = require('../../config/sql');
var ppas = require('../../common/db');
db = new ppas(
    config.db.host,
    config.db.port,
    config.db.database,
    config.db.user,
    config.db.password
);

var pgp = require('pg-promise');

function FarmService() {

    console.log('FarmService this:' + this);

    if (!(this instanceof FarmService)) {
        console.log('new FarmService');
        return new FarmService();
    }

    this.version = Math.floor(Math.random() * 65535);

};

FarmService.prototype.getFarm = function(farmNo) {
    db.query(sql.farm_info.selectByFarmNo, farmNo)
        .then(function (data) {
            console.log("DATA:", data);
        })
        .catch(function (error) {
            console.console(error);
        })
        .finally(function () {
            pgp.end();
        });
}

module.exports = FarmService;
