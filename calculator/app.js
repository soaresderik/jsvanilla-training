document.getElementById('loan-form').addEventListener('submit', function(e){
    // Hide Result
    document.getElementById('results').style.display = 'none';

    // Show Loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

function calculateResults(e){
    console.log('Calculando...');

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const mPayment = document.getElementById('monthly-payment');
    const tPayment = document.getElementById('total-payment');
    const tInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculateInterest = parseFloat(interest.value) / 100 / 12;
    const calculatePayments = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principal*x*calculateInterest)/(x-1);

    if(isFinite(monthly)){
        mPayment.value = monthly.toFixed(2);
        tPayment.value = (monthly * calculatePayments).toFixed(2);
        tInterest.value = ((monthly * calculatePayments) - principal).toFixed(2); 
        
        // Show Results
        document.getElementById('results').style.display = 'block';

        //Hide loader
        document.getElementById('loading').style.display = 'none';
    }else{
        showErrors('Por favor, verifique os valores digitados!');
    }

}

function showErrors(msg){

    // Hide  loader
    document.getElementById('loading').style.display = 'none';

    const fieldError = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    fieldError.className = 'alert alert-danger';
    fieldError.appendChild(document.createTextNode(msg));

    card.insertBefore(fieldError, heading);

    setTimeout(clearError, 2000);
}

function clearError(){
    document.querySelector('.alert').remove();
}