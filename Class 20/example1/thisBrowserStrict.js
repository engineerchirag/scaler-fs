"use strict";

// console.log(this);

// function test() {
//     console.log(this);
// }

// test();

let obj = {
    name: 'Chirag',
    city: 'Bangalore',
    getThis: function() {
        console.log(this);
    }
}

// obj.getThis();

let objFn  = obj.getThis;
objFn();

let obj1 = {
    name: 'Chirag',
    city: 'Bangalore',
    getThis: function() {
        function test() {
            console.log(this);
        }
        test();
    }
}

obj1.getThis();

