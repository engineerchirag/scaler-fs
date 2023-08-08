console.log('A'); //
console.log('B'); //
setTimeout(() => {
    console.log('C');
}, 1000);
setTimeout(() => {
    console.log('D');
}, 0);
console.log('E'); //
Promise.resolve().then(() => console.log('F'));
console.log('G'); //

// A B E G  ?  D  ?  C 