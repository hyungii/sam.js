(function() {
    var root = this;
    var version = '1.0';
    var Module4;
    console.log('typeof exports:'+typeof exports);
    if (typeof exports !== 'undefined') {
        Module4 = exports;
    } else {
        Module4 = root.Module4 = {};
    }
    Module4.getVersion = function() {
        return version;
    }
}).apply(this);
