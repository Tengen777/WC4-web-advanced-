document.addEventListener("DOMContentLoaded", () => {
    const targetNumber = Math.floor(Math.random() * 20) + 1;
    const form = document.getElementById('guessForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const userGuess = parseInt(document.getElementById('guessInput').value);

        compareNumber(userGuess)
            .then(resultMessage => {
                message.textContent = resultMessage;
            })
            .catch(errorMessage => {
                message.textContent = errorMessage;
            });
    });

    
