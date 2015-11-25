(function(global) {
    var root = global;
    var version = '1.0';
    var Module2;
    console.log('typeof exports:'+typeof exports);
    if (typeof exports !== 'undefined') {
        Module2 = exports;
    } else {
        Module2 = root.Module2 = {};
    }
    Module2.getVersion = function() {
        return version;
    }
}(this));
