// console.log(this);


// function test() {
//     console.log(this);
// }

// test();


// let obj = {
//     name: 'Chirag',
//     city: 'Bangalore',
//     getThis: function() {
//         function f() {
//             console.log(this);
//         }
//         f();
//     }
// }

// obj.getThis();


let obj1 = {
    name: 'Chirag',
    city: 'Bangalore',
    getThis: function() {
        console.log(this);
    }
}

// let fn = obj.getThis;
// fn();

let obj4 = {
    name: 'Souvik',
};

obj4.getThis = obj1.getThis;

obj4.getThis();