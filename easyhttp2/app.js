const http = new EasyHTTP;

// http.get('https://jsonplaceholder.typicode.com/posts')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

const data = {
    name: 'Andre Soares',
    username: 'deriksoares',
    email: 'andre@gmail.com'
}

// http.post('https://jsonplaceholder.typicode.com/posts/1', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));