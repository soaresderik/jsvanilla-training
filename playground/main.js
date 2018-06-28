document.getElementById('button').addEventListener('click', loadData);

function loadData(){

    /* 
       ------ Status HTTP ------
       200: OK
       403: Forbidenn

       ------ Ready State ------
       0: request not initialized
       1: server connection estabilished
       2: request received
       3: processing request
       4: process finished and response is ready

    */

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);

    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById('output').innerHTML = `<h1>
                ${this.responseText}
            </h1>`;
        }
    }



    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE ', xhr.readyState);

    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.send();
}