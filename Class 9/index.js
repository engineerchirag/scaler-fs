// var cartQuantity = 20;

// if (cartQuantity > 0) {
//     console.log('Widget 1');
// } else {
//     console.log('Widget 2');
// }



// (cartQuantity > 0) ? console.log('Widget 1') : console.log('Widget 2');




var cartQuantity = 0;
// if (cartQuantity > 10) {
//     console.log('Widget 2');
// } else if (cartQuantity > 0) {
//     console.log('Widget 1');
// } else {
//     console.log('Widget 3');
// }

// if (cartQuantity > 10) {
//     console.log('Widget 2');
// }

// if (cartQuantity > 0) {
//     console.log('Widget 1');
// } 
    
// console.log('Widget 3');


// switch(cartQuantity) {
//     case 0: {
//         console.log('Widget 1');
//         break;
//     }
//     case 20: {
//         console.log('Widget 2');
//         return;
//     }
//     default: {
//         console.log('Widget 3');
//     }
// }



var g = "global scope";
console.log('1 > ', g);

function outer() {
    var o = "outer scope";
    console.log('2 > ',g, o);

    function inner() {
        var i = "inner scope";
        console.log('3 > ',g, o, i);
    }
    inner();
}
outer();

// Hoisting

// console.log(a, b);
// var a = 10;
// var b = 20;

///

// var a;
// var b;

// console.log(a,b);

// a = 10;
// b = 20;

// Example 2:

// var a;
// a = 10;
// console.log(a, b);
// var b;
// b = 20;

/// After hoisting

// var a;
// var b;

// a = 10;
// console.log(a, b);
// b = 20;


// function inner() {
//     console.log(a, b);
//     a = 10;
//     var b = 20;
// }

// inner();


// let b = 10;
// console.log(b);
// console.log('Hi');
// console.log(a);
// let a = 1;


// for (let i = 0; i < 5; i++) {
//     console.log('First -', i);
// }

// for (; i < 5; i++) {
//     console.log('Second -', i);
// }




// Named function
// console.log('Sum > ', sum(1, 2));
// function sum(a, b) {
//     return a + b;
// }

// Anonymous Function
// console.log('Total > ', total(1, 2));
// var total = function(a, b) {
//     return a + b;
// }




// function sum(...args) {
//     console.log(arguments);
//     console.log(args);
//     var sum = 0;
//     for(var i = 0; i< args.length; i++) {
//         sum += args[i];
//     }
//     return sum;
// }


// console.log('Sum > ', sum(1, 2));
// console.log('Sum > ', sum(3, 4));
// console.log('Sum > ', sum(3, 4, 5));


