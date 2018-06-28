let min = 1,
    max = 10,
    winningNum = getWinningNum(min, max),
    guessLeft = 3;


const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    console.log(guess);

    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Por favor, digite um número entre ${min} e ${max}`, 'red');
        return false;
    }   

    if(guess === winningNum){
        // Game Over - won
        gameOver(true, `${winningNum} está correto, VOCÊ GANHOU!`);
    }else{
        guessLeft -= 1;

        if(guessLeft === 0){
            gameOver(false, `Fim de Jogo, você perdeu. A resposta correta era ${winningNum}`);
        } else{
            // Resposta Errada
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`Não é ${guess}, lhe sobraram ${guessLeft} tentativas`, 'red');
        } 
    }
});

function gameOver(won, msg){

    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.style.borderColor = color;
    guessInput.disabled = won;
    message.style.color = color;
    setMessage(msg, color);

    guessBtn.value = 'Jogar Novamente';
    guessBtn.className += 'play-again';
}

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

function getWinningNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min );
}