// Object

var a = {
    b: {
        c: {
            d: 1
        }
    }
}

var obj = {
    name: "Chirag Goel",
    dob: "13/11/XXXX",
    age: 30,
    married: true,
    techStacks: ["JS", "React", "Node", "GraphQl"],
    address: {
        pincode: 560067,
        city: "Bangalore"
    },
    greet: function() {
        console.log('Hi, from Chirag Goel!');
    }
};



var obj2 = {
    name: "Chirag Goel",
    dob: "13/11/XXXX",
    age: 30,
};

// Read

// console.log(obj2['name']);
// console.log(obj2.name);
// console.log(obj2.age);
// console.log(obj2['age']);

// Update

// obj2['name'] = "Chirag Goel Upgraded";
obj2.name = "Chirag Goel Upgraded";
// console.log(obj2['name']);
// console.log(obj2.name);

// Create

obj2['school address'] = "Knapur";

var sal = 'salary';
obj2[sal] = 'XXXXXXXXX';
// console.log(obj2);

// {
//     name: "Chirag Goel",
//     dob: "13/11/XXXX",
//     age: 30,
//     salary: 'XXXXXXXXX'
// }

// Delete
delete obj2[sal];
// console.log(obj2);




var obj = {
    name: "Chirag Goel",
    dob: "13/11/XXXX",
    age: 30,
    married: true,
    techStacks: ["JS", "React", "Node", "GraphQl"],
    address: {
        pincode: 560067,
        city: "Bangalore"
    },
    greet: function() {
        console.log('Hi, from Chirag Goel!');
        return "Hahaha";
    }
};

// //1. Read: address
// console.log(obj.address);
// //2. Read: techStacks
// console.log(obj.techStacks);
// //3. Read: greet & execute
// console.log(obj.greet());
// //4. Read: pincode
// console.log(obj.address.pincode);
// //5. Update: city to Mumbai
// obj.address.city = "Mumbai";
// console.log(obj);
// //6. Update: 1st index of techStack to "Javascript"
// // obj.techStacks[0] = "Javascript";
// obj['techStacks'][0] = "Javascript";
// console.log(obj);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// var keys = Object.keys(obj);
// for (var i = 0; i < keys.length; i++) {
//     console.log(keys[i], obj[keys[i]]);
// }

// for (let i in obj) {
//     console.log(i, obj[i]);
// }




