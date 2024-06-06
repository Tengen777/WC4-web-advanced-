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

    function compareNumber(nr) {
        return new Promise((resolve, reject) => {
            if (isNaN(nr) || nr < 1 || nr > 20) {
                reject("Dat is geen geldig nummer (Fout)");
            } else if (nr < targetNumber) {
                resolve("Het mysterieuze getal is hoger. Raad nog eens!");
            } else if (nr > targetNumber) {
                resolve("Het mysterieuze getal is lager. Raad nog eens!");
            } else {
                resolve("Je hebt het mysterieuze nummer geraden!");
            }
        });
    }
});
