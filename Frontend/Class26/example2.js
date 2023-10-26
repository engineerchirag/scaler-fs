// Q1: Implement a counter function that returns a 
// new counter instance 
// each time it's called, and 
// each instance maintains its own count.
// without class.


function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    }
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3


const counter2 = createCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2
console.log(counter2()); // 3
console.log(counter2()); // 4
console.log(counter2()); // 5
console.log(counter2()); // 6


// Q2: Implement a function that generates a random 
// number between 1 and 100,
// and returns a function that checks if a guessed 
// number matches 
// the generated number.


function numberGame() {
    let targetNumber = Math.floor(Math.random() * 100) + 1;
    return function(num) {
        if (num === targetNumber) {
            return 'Congratulations!';
        } else if (num < targetNumber){
            return 'Try a higher number';
        } else {
            return 'Try a lower number';   
        }
    }
}


const guessNumber = numberGame();

console.log(guessNumber(50));
console.log(guessNumber(20));
console.log(guessNumber(80));



// Q3: Write a function sum(x)(y)(z) 
// Returns sum of x, y, z


function sum(x) {
    return function(y) {
        return function(z) {
            return z + y + x;
        }
    }
}

console.log(sum(1)(2)(3)); // 6 


// Q4: Create a function that generates a sequence
//  of Fibonacci numbers 
// using closure.


function fibonacciSequence() {
    let a = 0; let b = 1;
    return function() {
        const result = a;
        // a = b;
        // b = result + a;
        [a, b] = [b, a+b];
        return result;
    }
}

const generateFibonacci = fibonacciSequence();
console.log(generateFibonacci()); 0
console.log(generateFibonacci()); 1
console.log(generateFibonacci()); 1
console.log(generateFibonacci()); 2
console.log(generateFibonacci()); 3
console.log(generateFibonacci()); 5
console.log(generateFibonacci()); 8
