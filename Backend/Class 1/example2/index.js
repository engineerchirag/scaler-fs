const fs = require('fs');

// console.log(fs);


const demoFileData = fs.readFileSync('./demo.txt');
console.log(demoFileData.toString());

fs.appendFileSync('./demo.txt', '-- By Chirag Goel');
const demoFileUpdatedData = fs.readFileSync('./demo.txt');
console.log(demoFileUpdatedData.toString());

// console.log(fs.mkdirSync('dummy'));

fs.writeFileSync('./index.html', `
<html>
    <body>
        <h1>Demo Html Page</h1>
    </body>
</html>
`);

