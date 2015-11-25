var FarmService = require('./FarmService');

module.exports.getFarm = function (farmNo) {
    return new FarmService().getFarm(farmNo);
};

module.exports.FarmService = FarmService;
