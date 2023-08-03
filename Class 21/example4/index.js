const obj1 = {
    a: 1,
    b: 2,
    sum: function() {
        return this.a + this.b;
    }
};

console.log(obj1.sum()); // 3


const sumRef = obj1.sum;
console.log(sumRef()) // NaN
console.log(sumRef.call(obj1)) // 3

const obj2 = {
    a: 2,
    b: 5,
}
console.log(sumRef.call(obj2)); // 7



/// Examples
function total(stateTax, centralTax) {
    return this.num1 + this.num2 + stateTax + centralTax;
}


console.log(total()); // a: ??


const data1 = {
    num1: 10,
    num2: 20,
}

console.log(total.call(data1, 30, 40)); // b: 100
console.log(total.apply(data1, [30, 40])); // b: 100

const totalBind = total.bind(data1);
console.log(totalBind(40, 50)); //  120
console.log(totalBind(10, 10)); // 50





// const data2 = {
//     num1: 10,
//     num2: 20,
// }

// console.log(total.call(data2)); // b: ??





