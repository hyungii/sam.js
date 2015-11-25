var _ = require('underscore');

var obj = null;

if (!_.isNull(obj)) {
    console.log('obj is not null');
} else {
    console.log('obj is null');
}

//obj = 'aa';

if (!_.isEmpty(obj)) {
    console.log('obj is not empty');
} else {
    console.log('obj is empty');
}
