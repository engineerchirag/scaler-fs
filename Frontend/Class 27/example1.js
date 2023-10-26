// 2nd day
// this
// promises
// function
// setTimout/debounce/throttle
// prototype


// Q1:

const person = {
    fullName: 'Chandra'
}

function sayHello() {
    console.log(this.fullName);
}


sayHello(); // A1.a

person.sayHello = sayHello;

person.sayHello() // A1.b


// Q2:

const person = {
    fullName: 'Chandra'
}

function sayHello() {
    setTimeout(function() {
        console.log(this.fullName);
    }, 1000);
}


sayHello(); // A2.a

person.sayHello = sayHello;

person.sayHello() // A2.b


// Q3:

const counter = {
    value: 0,
    increment: function() {
        this.value++;
    }
}

counter.increment();
counter.increment();
console.log(counter.value); // Q3

// Q4: 

const counter = {
    value: 0,
    increment: function() {
        setTimeout(function() {
            this.value++;
        }, 1000);
    }
}

counter.increment();
counter.increment();
console.log(counter.value); // Q4



// Q5: 

var value = 10;
const counter = {
    value: 0,
    increment: function() {
        setTimeout(function() {
            this.value++;
        }, 1000);
    }
}

counter.increment();
counter.increment();
console.log(counter.value); // Q5.a
console.log(value); // Q5.b


setTimeout(function() {
    console.log(value);
}, 5000);



// Q6: 

const counter = {
    value: 0,
    increment: () => {
        this.value++;
    }
}

counter.increment();
counter.increment();
console.log(counter.value); // Q6

// Q7: 

var value = 20;
const counter = {
    value: 0,
    increment: () => {
        this.value++;
    }
}

counter.increment();
counter.increment();
console.log(counter.value); // Q7
console.log(value);

// Q8: 


function Outer() {
    this.value = 20;
    this.name = 'Das';
    const counter = {
        value: 0,
        increment: () => {
            console.log(this);
            this.value++;
        }
    }

    counter.increment();
    counter.increment();
    console.log(counter.value); // Q8

    const newInc = counter.increment;
    newInc();
    newInc();
    console.log(counter.value);
}

new Outer();

// Q9:


const counter = {
    value: 0,
    increment: function() {
        this.value++;
    }
}

const newInc = counter.increment.bind(counter);
newInc();
newInc();
console.log(counter.value); // Q9










