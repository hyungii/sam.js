function Person(name) {
    this.name = name;

    this.toString = function() {
        console.log('My name is ' + this.name);
    };
};

var p1 = new Person('hyung');
var p2 = new Person('jin');

p1.toString();
p2.toString();

global.gp = new Person('jun');

gp.toString();

module.exports = p1;
