const fs = require("fs");

const f1Promise = fs.promises.readFile("f1.txt");
const f2Promise = fs.promises.readFile("f2.txt");
const f3Promise = fs.promises.readFile("f3.txt");

f1Promise.then((data) => {
    console.log('File 1 data > ', data.toString());
    return f2Promise;
}).then((data) => {
    console.log('File 2 data > ', data.toString());
    return f3Promise;
}).then((data) => {
    console.log('File 3 data > ', data.toString());
})
