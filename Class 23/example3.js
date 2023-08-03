const fs = require('fs');

console.log('Start');
fs.readFile('f1.txt', readFileCallback1);
console.log('End');

function readFileCallback1(err, data) {
    if(err) {
        console.log(err);
    }else {
        fs.readFile('f2.txt', readFileCallback2)
        console.log('File 1 Data > ', data);
    }
}

function readFileCallback2(err, data) {
    if(err) {
        console.log(err);
    }else {
        console.log('File 2 Data > ', data);
    }
}


// function Outer() {
//     Inner();
//     console.log('Outer');
// }

// function Inner() {
//     Child();
//     console.log('Inner');
// }

// function Child() {
//     console.log('Child');
// }

// Outer();




