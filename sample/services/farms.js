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

var getFarms = function(req, res, next) {
    db.query(sql.farm_info.selectByFarmNo, 1001)
        .then(function (data) {
            console.log("DATA:", data);
        })
        .catch(function (error) {
            console.console(error);
        })
        .finally(function () {
            pgp.end();
        });
};

module.exports = getFarms;
