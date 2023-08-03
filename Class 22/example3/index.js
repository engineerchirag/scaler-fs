let a = 10;
let b = a;
b = 20;
// console.log(a, b);


let c = 'Chirag';
let d = c;
c = 'Goel';
// console.log(c, d);

let e = {
    firstName: 'Hargun',
    lastName: 'Singh',
    address: {
        city: 'Bangalore',
        permanentAddress: {
            pincode: 56067
        }
    },
    getDetail: function() {
        console.log('Detail');
    }
}

// let f = e;
// f.lastName = 'King';

// console.log(e, f);


// let g = {...e};
// g.lastName = 'King';
// g.address = {...e.address};
// g.address.city = 'Punjab';

// console.log(e, g);

let h = JSON.parse(JSON.stringify(e));
h.firstName = 'Souvik';
h.address.permanentAddress.pincode = 260001;
console.log(h, e);

