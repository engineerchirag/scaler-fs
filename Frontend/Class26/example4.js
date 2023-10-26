// Q1:  Write a polyfill for the map 
// method, which applies a given function to each 
// element of an array 
// and returns a new array of results.

[1,2,3].map((item) => item * 2 ); // 2, 4, 6


[1,2,3].customMap((item, idx, arr) => item * 2 ); // 2, 4, 6

if (!Array.prototype.customMap) {
    Array.prototype.customMap = function(cb) {
        // 1. iterates through all array item
        // 2. execute callback on every item
        // 3. add callback value to new array
        // 4. return a new array

        var newArr = [];
        for (let i = 0; i < this.length; i++) {
            newArr.push(cb(this[i], i, this));
        }

        return newArr;
    }
}

// Q2: Create a constructor function for a Person
//  object with name 
// and age properties, and add a method greet to the
// prototype 
// that logs a greeting message.

function Person(name, age) {
    this.name = name;
    this.age = age;   
}

Person.prototype.greet = function() {
    return 'Boss, you are always right!';
}

const Kiran = new Person('Kiran', 60);
console.log(Kiran);



// Q3: Create a class for a Person
//  object with name 
// and age properties, and add a method greet to the
// prototype 
// that logs a greeting message.


class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return 'All are champ!'
    }
}

const Abhishek = new Person('Abhishek', 14);
console.log(Abhishek);
