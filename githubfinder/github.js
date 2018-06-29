class GitHub{
    constructor(){
        this.client_id = '044ecbe0f9cd24459823';
        this.client_secret = '440f7e976118b387fca6d14d9dbe9b742bf03d05';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}
        ?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?
        per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}
        &client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return{
            profile,
            repos
        }
    }  

}