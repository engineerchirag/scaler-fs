
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

// const Promise1 = myFetch(1000, 10); // Post
// const Promise2 = myFetch(3000, 10); // User
// const Promise3 = myFetch(4000, 10); // Comment

let count = 0;
setInterval(() => {
    console.log('Counter > ', count);
    count++;
}, 1000);


// myFetch(1000, 10)
//     .then(() => {
//         return myFetch(3000, 10);
//     })
//     .then(() => {
//         return myFetch(4000, 10);
//     })
//     .then(() => {
//         console.log('Ready to show post');
//     });


Promise.all([myFetch(8000, 10), myFetch(1000, 10), myFetch(3000, 4) ])
    .then((data) => {
        console.log('Resolved > ', data);
    })
    .catch((e) => {
        console.log('Rejected > ', e);
    });