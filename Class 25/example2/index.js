function fetchData(url) {
    return fetch(url).then(res => res.json());
}


Promise.all([
    fetchData('https://jsonplaceholder.typicode.com/posts/1'),
    fetchData('https://jsonplaceholder.typicode.com/users/1'),
    fetchData('https://jsonplaceholder.typicode.com/comments/1')
])
.then((data) => console.log(data))
.catch(e => console.log(e));
