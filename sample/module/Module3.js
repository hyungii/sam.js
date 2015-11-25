(function() {
    var root = this;
    var version = '1.0';
    var Module3;
    console.log('typeof exports:'+typeof exports);
    if (typeof exports !== 'undefined') {
        Module3 = exports;
    } else {
        Module3 = root.Module3 = {};
    }
    Module3.getVersion = function() {
        return version;
    }
}());
