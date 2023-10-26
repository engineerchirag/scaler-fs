// Q1: Implement numberOfArguments, sunh that 
// numberOfArguments('a', 'b', 'c'); // 3
// numberOfArguments(1, 2) // 2
// return number of arguments passed in numberOfArguments


function numberOfArguments(n1) {
    return arguments.length;
}

console.log(numberOfArguments('a', 'b', 'c'));
console.log(numberOfArguments(1, 2));


// Q2: 

var obj1 = { name: 'Chirag', city: 'Bangalore' };

// var obj2 = { ...obj1 }; // Shallow copy
//var obj2 = Object.assign({}, obj1); // shallow copy
var obj2 = JSON.parse(JSON.stringify(obj1));
obj2.city = 'Paris';

console.log(obj1, obj2);
