class EasyHTTP {
    async get(url){
        const response = await fetch(url);
        const res = await response.json();

        return res;
    }

    async post(url, data){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }); 

        const res = await response.json();
        return res;
    }

    async put(url, data){
        const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        
        const res = await response.json();
        return res; 
    }

    async delete(url){
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })  
        
        const res = await 'Excluido...';
        return res; 
    }
}