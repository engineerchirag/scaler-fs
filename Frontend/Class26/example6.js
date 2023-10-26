// Q1: Execute all fetch calls in parallel

const fetchUserData = fetch('https://dummyjson.com/users');
const fetchPostData = fetch('https://dummyjson.com/posts');

Promise.all([fetchUserData, fetchPostData])
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then((res) => console.log(res));