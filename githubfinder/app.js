const github = new GitHub;
const ui = new UI;

const seachUser = document.getElementById('searchUser');

seachUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== ''){
        github.getUser(userText)
                .then(data => {
                    console.log(data);
                    if(data.profile.message === 'Not Found'){
                        ui.showAlert('Ops! Usuário não encontrado', 'alert alert-warning');
                    } else {
                        ui.showProfile(data.profile);
                        ui.showRepos(data.repos);
                    }
                })
    }else{
        ui.clearProfile();
    }
})