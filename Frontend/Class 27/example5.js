// Q1: Implment sleep function

async function greeting() {
  console.log('Hello!');
  await sleep(10000, 'I\'m sleeping for 10000ms');
  console.log('Bye.'); // Only logs after 2000 milliseconds (2 seconds)
}

greeting();
// t = 0: Hello!
// I'm sleeping for 2000ms
// t = 2000: Bye.

function sleep(delay, message) {
    return new Promise((resolve, reject) => {
        console.log(message);
        setTimeout(() => {
            resolve();
        
        }, delay);

    })
}



// Q2: Multiple APIs to be resolved at same time.

const fetchUserData = () => fetch('https://dummyjson.com/users').then(response => response.json());
const fetchUserPosts = () => fetch('https://dummyjson.com/posts').then(response => response.json());
const fetchUserProducts = () => fetch('https://dummyjson.com/products').then(response => response.json());

Promise.all([fetchUserData(), fetchUserPosts(), fetchUserProducts()])
    .then(data => console.log(data));
