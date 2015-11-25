//var farm = require('./farms');
//farm();

/*
var FarmService = require('./FarmService');
var farmService = new FarmService();
console.log(farmService.version);
farmService.getFarm(1001);

console.log('farmService:' + farmService);

delete farmService;
console.log('after ::: ' + farmService.version);
*/

var farmService = require('./FarmBean');
farmService.getFarm(1001);

var Test = require('./FarmBean').FarmService;
var test = new Test();
if (farmService === farmService) {
    console.log('farmService and farmService equals');
}
if (farmService === test) {
    console.log('farmService and test equals');
}
test.getFarm(2001);
