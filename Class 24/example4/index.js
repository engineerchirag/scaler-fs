const fs = require("fs");

const f1Promise = fs.promises.readFile("f1.txt");
const f2Promise = fs.promises.readFile("f2.txt");
const f3Promise = fs.promises.readFile("f3.txt");

console.log('A');
f1Promise
  .then((data) => {
    console.log('F1> ', data);
  })
  .catch((err) => console.log(err));


console.log('B');
f2Promise
  .then((data) => {
    console.log('F2> ',data);
  })
  .catch((err) => console.log(err));

console.log('C');
f3Promise
  .then((data) => {
    console.log('F3> ',data);
  })
  .catch((err) => console.log(err));
