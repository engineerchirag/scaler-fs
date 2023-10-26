// Q1: Output

function example() {

    if(true) {
        var a = 1;
        let b = 2;
    }

    console.log(a); 
    console.log(b);

}

example();


// Q2: Output

function example() {

    if(true) {
        console.log(b);
        var a = 1;
        let b = 2;
    }

    console.log(a); 
}

example();


// Q3: Output


function outer() {
    var a = 10;
    return function () {
        return a;
    }
}

const innerF = outer();

const newInnerRef = innerF; 
console.log(newInnerRef());




