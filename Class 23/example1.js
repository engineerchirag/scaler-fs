// Question 1:
function sum(a, b) {
    return a + b;
}

console.log(sum(1,2)); // 3
console.log(sum(a, b)); // NaN

var a = 10;
var b = 20;



// Question 2:
var obj = {
	a: 10,
  	b: 20,
  	sum: function() {
    	return this.a + this.b;
    }
}

console.log(obj.sum()); 


var obj2Sum = obj.sum;

console.log(obj2Sum());


// Question 3:


while(true) {
    console.log('C');
}

console.log('A');
console.log('B');


// OUTPUT: ??

// Question 4:

for(var i = 1;  i <= 10000000; i++ ) {
    console.log('C');
}

console.log('A');
console.log('B');



