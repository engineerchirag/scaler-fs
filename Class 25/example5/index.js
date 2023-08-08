
const list = [{
    id: 1,
    title: 'Product 1',
    description: 'Awesome product'
}, {
    id: 2,
    title: 'Product 2',
    description: 'Awesome product'
}, {
    id: 3,
    title: 'Product 3',
    description: 'Awesome product'
}];


const myFetch = function(delay, val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (val > 5) {
                resolve(list);
            } else {
                reject('Error in loading!')
            }
        }, delay);
    })
}

// async function result() {
//     try {
//         const data1 = await myFetch(2000, 10);
//         console.log(data1);
//         const data2 = await myFetch(1000, 3);
//         console.log(data2);
//         const data3 = await myFetch(8000, 10);
//         console.log(data3);
//     } catch(e) {
//         console.log(e);
//     }
// }

// async function result() {
//     try {
//         const data1 = await myFetch(2000, 10);
//         console.log(data1);
//     }catch(e) {
//         console.log(e);
//     }
//     try {
//         const data2 = await myFetch(1000, 3);
//         console.log(data2);
//     }catch(e) {
//         console.log(e);
//     }
//     try{
//         const data3 = await myFetch(8000, 10);
//         console.log(data3);
//     } catch(e) {
//         console.log(e);
//     }
// }

// result();


// function result() {
//     try {
//         // no catch handling in callback
//         myFetch(2000, 3)
//             .then(data => console.log(data)) 
//     } catch(e) {
//         console.log('try/catch > ', e);
//     }
// }

function result() {
    try {
        console.log('A');
        console.log('B');
        throw new Error("Error in between");
        console.log('C');
        console.log('D');
    } catch(e) {
        console.log('try/catch > ', e);
    }
}

// function result() {
//     try {
//         myFetch(2000, 3)
//             .then(data => console.log(data)) 
//             .catch(e =>  {
//                 throw e;
//             })
//     } catch(e) {
//         console.log('try/catch > ', e);
//     }
// }

result();


// ES6: try/catch > async/await

// ES2015: then/catch => callback + chaining