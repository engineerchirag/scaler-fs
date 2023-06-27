
var arr = [10, 11,12,13,14,15];

function inperativeFn() {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// console.log(inperativeFn());


function declarativeFn() {
    var sum = 0;
    const result = arr.forEach(function (item) {
        sum += item;
    });
    console.log('result', result);
    return sum;   
}

// declarativeFn();


// Arrow function

var sum = function (a, b) {
    return a + b;
}

var sum = (a, b) => a + b;

var sum = (a, b) => {
    //
    //
    console.log(a + b);
    return a + b;
};

// Map function

var arr = ['apple', 'banana', 'mango']; 
// Output: ['APPLE', 'BANANA', 'MANGO']

function upperCaseImperative() {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        var uppercaseValue = arr[i].toUpperCase();
        newArr.push(uppercaseValue);
    }
    return newArr;
}

// console.log(upperCaseImperative());

function upperCaseDeclarative() {

    // map return news array of same length with modified values
    var result = arr.map(function(item) {
        return item.toUpperCase();
    })

    // console.log(result);
    return result;
}
// upperCaseDeclarative();


// Question:
// [1,2,3,4] > Input
// [2,4,6,8] > Output

function doubleValueDeclarative() {

    // map return news array of same length with modified values
    var result = arr.map(function(item) {
        return item * 2;
    })

    // console.log(result);
    return result;
}


var arr10 = [1,2,3,4,5,6,7,8];
// [2,4,6,8]

function filterEvenValues() {
    var result = arr10.filter(function(item) {
        return item % 2 === 0;
    })

    // console.log(result);
    return result;
}
// filterEvenValues();


var arr10 = [1,2,3,4,5,6,7,8];

function sumDeclarative() {
    var result = arr10.reduce(function(acc, item) {
        acc += item;
        return acc;
    }, 0);

    console.log(result);
}

sumDeclarative();


var strArray = ['My', 'Name', 'Is', 'Chirag'];

// Output = My Name Is Chirag 

function generateStatement() {
    var result = strArray.reduce(function(acc, item) {
        acc = acc + item + ' ';
        return acc;
    }, '');

    console.log(result);
}

generateStatement()