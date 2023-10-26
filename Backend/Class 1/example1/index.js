const path = require('path');

console.log('Filename > ', __filename);
console.log('Dirname > ', __dirname);

console.log('isAbsolute > ', path.isAbsolute(__filename));

console.log('sep > ', path.sep);
console.log('delimiter > ', path.delimiter);

// console.log(process.env.PATH);

console.log('extension > ', path.extname(__filename) );


console.log('relative > ', path.relative(__filename, '/Users/engineerchirag/workspace/Scaler/Frontend/Class 1/index.html'))

// console.log(path);



