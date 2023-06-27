// Parameter as reference

function sum(a1, a2) { // Impure functions 
    // console.log(typeof obj1); // object
    var result = a1.value +  a2.value;
    a1.value = 500;
    return result;
}

var obj1 = {
    value: 200,
}

var obj2 = {
    value: 300,
}

// console.log(sum(obj1, obj2)); // 800
// console.log(obj1.value); // ??

// sum(obj1, obj2); 
// console.log(obj1.value); // 
// sum(obj1, obj2); 
// console.log(obj1.value); // 



// Parameter as values

function total(ob1Value, ob2Value) { // Pure function
    // console.log(typeof ob1Value); // number
    return ob1Value + ob2Value;
}

var obj1 = {
    value: 200,
}

var obj2 = {
    value: 300,
}

// console.log(total(obj1.value, obj2.value));




var fnAsValue = function (fn) {
    console.log(typeof fn)
    var result = fn(1,2);
    console.log(result);
};
// fnAsValue(total);


var fnAsReturnValue = function() {
    return function() {
        console.log('Returned function')
    }
}

// console.log(typeof fnAsReturnValue());
// console.log(fnAsReturnValue());

const innerFn = fnAsReturnValue();
console.log(typeof innerFn);
innerFn();






