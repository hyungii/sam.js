var async = require('async');

// first arg : exec function array
// second arg : last exec function
async.waterfall([
    function(callback) {
        // callback arg (error object, user args ...)
        console.log(arguments);
        callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback) {
        console.log(arguments);
        callback(null, 'three');
    },
    function(arg1, callback) {
        console.log(arguments);
        callback(null, 'done');
    }
],
// finish and this function call
function(err, results) {
    console.log(arguments);
});
