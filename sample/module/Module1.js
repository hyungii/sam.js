(function() {
    'use strict';
    var root = this;
    var version = '1.0';
    var Module1;
    console.log('typeof exports:'+typeof exports);
    if (typeof exports !== 'undefined') {
        Module1 = exports;
    } else {
        Module1 = root.Module1 = {};
    }
    Module1.getVersion = function() {
        return version;
    }
}).call(this);
