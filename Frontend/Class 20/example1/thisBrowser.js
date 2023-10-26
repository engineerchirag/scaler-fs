console.log(this);


function test() {
    console.log(this);
}

test();

let obj = {
    name: 'Chirag',
    city: 'Bangalore',
    getThis: function() {
        console.log(this);
    }
}

// obj.getThis();
let obj3getThisFn = obj.getThis; 
obj3getThisFn();
// console.log(typeof obj3getThisFn);



let obj1 = {
    name: 'Chirag',
    city: 'Bangalore',
    getThis: function() {
        console.log(this); // obj
        // function test() {
        //     console.log(this);
        // }
        // test();
    }
}

obj1.getThis();


// root level object > window | global





let obj4 = {
    name: 'Souvik',
};

obj4.getThis = obj1.getThis;

obj4.getThis();