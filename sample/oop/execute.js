var Person = require('./Person');       // class
console.log('>> Person');
console.log(Person);

console.log('>> Person.toString()');
console.log(Person.toString());

var p = new Person('hyung', 'yoon');    // object
console.log('>> p');
console.log(p);

console.log('>> p.toString()');
console.log(p.toString());

var tablet = require('./Tablet');
console.log('>> tablet');
console.log(tablet);

tablet.getLog();
