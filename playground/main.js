document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const customer = JSON.parse(this.responseText);
            const output = `
                <ul>
                    <li>#${customer.id}</li>
                    <li>Nome: ${customer.name}</li>
                    <li>Empresa: ${customer.company}</li>
                    <li>Nome: ${customer.phone}</li>
                </ul>
            `;

            document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();

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
}


function loadCustomers(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const customers = JSON.parse(this.responseText);
            let output = '';

            customers.forEach(customer => {
                output += `
                    <ul>
                        <li>#${customer.id}</li>
                        <li>Nome: ${customer.name}</li>
                        <li>Empresa: ${customer.company}</li>
                        <li>Nome: ${customer.phone}</li>
                    </ul>
                `;
            });
            

            document.getElementById('customers').innerHTML = output;
        }
    }

    xhr.send();

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
}