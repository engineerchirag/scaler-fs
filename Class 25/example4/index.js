
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


// serial execution
// async function promises() {
//     const promise1Data = await myFetch(8000, 10);
//     console.log('promise1Data >', promise1Data);
//     const promise2Data = await myFetch(1000, 10);
//     console.log('promise2Data >', promise2Data);
//     const promise3Data = await myFetch(4000, 10);
//     console.log('promise3Data >', promise3Data);
//     return [promise1Data, promise2Data, promise3Data];
// }

// const promises = async () => {
//     const promise1Data = await myFetch(1000, 10);
//     console.log('promise1Data >', promise1Data);
// }

// promises().then((data) => {
//     console.log('Outcome>', data);
// })

// async function result() {
//     console.log('Outcome>', await promises());
// }

// result();


// Parallel execution 

async function promises() {
    const result = await Promise.all([myFetch(8000, 10), myFetch(1000, 10), myFetch(4000, 10)])
    console.log(result);
}

promises();










let count = 1;
setInterval(() => {
    console.log('Counter > ', count);
    count++;
}, 1000);