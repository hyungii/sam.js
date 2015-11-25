var Module5 = (function() {
    var root = this;
    var version = '1.0';
    var Module5;
    console.log('typeof exports:'+typeof exports);
    if (typeof exports !== 'undefined') {
        Module5 = exports;
    } else {
        Module5 = root.Module5 = {};
    }
    Module5.getVersion = function() {
        return version;
    }

    return Module5;
}());
