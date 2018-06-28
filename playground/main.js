// async function myFunc(){
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 4000);
//     });

//     const error = true;

//     if(error){
//         const res = await promise;
//         return res;
//     } else {
//         await Promise.reject(new Error('Ops! Ocorreu algum erro :-('));
//     }
    
// }

// myFunc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

async function getUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json();

    return data;
}

getUsers().then(users => console.log(users));