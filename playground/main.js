const posts = [
    {title: 'Post One', body: 'Este é o post um'},
    {title: 'Post Two', body: 'Este é o post dois'}
];

function createPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            const error = true;
            if(error){
              resolve();
            }else{
              reject('Error: Ops! Algo deu errado :-(');
            }
        }, 2000);
    });
}

function getPost(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'Este é o terceiro post'})
        .then(getPost)
        .catch(function(err){
            console.log(err);
        });
