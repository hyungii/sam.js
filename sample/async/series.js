var async = require('async');

async.series([
    function(callback) {
        callback(null, 'one');
    },
    function(callback) {
        callback(null, 'two');
    },
    function(callback) {
        callback(null, 'three', 'four');
    }
],
function(err, results) {
    console.log(arguments);
});
