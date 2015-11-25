var promise = require('bluebird');
var options = {
    promiseLib: promise
};
var pgp = require('pg-promise')(options);

var cn = {
    host: '14.49.37.90',
    port: 5432,
    database: 'samdb',
    user: 'samadm',
    password: 'samadm@damola12@'
};

var db = pgp(cn); // database instance;

db.query("select * from farm_info where farm_no=$1", 1001)
    .then(function (data) {
        console.log("DATA:", data);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    })
    .finally(function () {
        pgp.end();
    });