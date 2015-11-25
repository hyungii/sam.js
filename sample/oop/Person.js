function Person(firstName, lastName) {
    // when create new object, increase.
    this.constructor.population++;

    // private variable and function
    var alive = true;
    
    function getFullName() {
        return lastName + ", " + firstName;
    }

    // privileged method
    // could public call and access private variable and function
    this.toString = function() {
        return getFullName();
    }

    this.isAlive = function() {
        return age;
    }

    // public properties
    // anyone could read/write
    this.age = 1;
}

// public method
Person.prototype.addAge = function() {
    this.age++;
}

// static properties
// anyone could read/write
Person.population = 0;

// static method
Person.showTotalPopulation = function(msg) {
    console.log(msg + " : " + Person.population);
}

/*
var personList = [ new Person('hyung', 'yoon'), new Person('jin', 'lee') ];

console.log(personList[0] + ", " + personList[1] + ", population:" + Person.population);
*/

module.exports = Person;
