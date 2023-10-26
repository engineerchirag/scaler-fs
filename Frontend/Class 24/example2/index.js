// const myPromise = new Promise((resolve, reject) => {
//     reject('Rejected!');
// });

// console.log('A');

// myPromise.then((data) => {
//     console.log('This executes in case of proposal expected!')
//     console.log(data);
// }).catch((error) => {
//     console.log('This executes in case of proposal rejected!');
//     console.log(error);
// });

// console.log('B');


// Mimic API call


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


const myFetch = function(val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (val > 5) {
                resolve(list);
            } else {
                reject('Error in loading!')
            }
        }, 2000);
    })
}

myFetch(10)
    .then((data) => {
        console.log('Success');
        return data;
    })
    .then((list) => {
        const productCount = list.length;
        console.log(list);
        return productCount;
    })
    .then((productCount) => {
        console.log(productCount);
    })
    .catch((error) => console.log('Failure > ', error));

