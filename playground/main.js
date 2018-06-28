const posts = [
    {title: 'Post One', body: 'Este é o post um'},
    {title: 'Post Two', body: 'Este é o post dois'}
];

// function createPost(post){
//     setTimeout(function(){
//         console.log('passou aqui');
//         posts.push(post)
//     }, 5000);
// }

// function getPost(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`
//         });

//         document.body.innerHTML = output;
//     }, 2500);
// }

// createPost({title: 'Post Three', body: 'Este é o terceiro post'});

// getPost();

function createPost(post, callback){
    setTimeout(function(){
        console.log('passou aqui');
        posts.push(post)
        callback();
    }, 4000);
}

function getPost(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 2000);
}

createPost({title: 'Post Three', body: 'Este é o terceiro post'}, getPost);
