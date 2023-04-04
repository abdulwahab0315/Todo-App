let randomNumber = Math.floor(Math.random() * 100) + 1;
let userGuesses = [];
let counter = 0;

const displayText = document.getElementById("display");
displayText.innerText = `Current Random Number is: ${randomNumber}`;
const handleSubmit = () => {
    const userInput = document.getElementById("input-text");
    const displayText = document.getElementById("display-text");
    const para = document.getElementsByClassName("outputs")

    if (counter >= 2) {
        displayText.innerText = "Game over. You are out of move";
        resetGame();
        return;
    }


    const userNumber = userInput.value;

    if (userNumber == randomNumber) {
        displayText.innerText = "Congratulations. You guessed the correct number"
    }
    else if (userNumber > randomNumber) {
        displayText.innerText = "Your guessed number is greater than the actual number.";
    }
    else if (userNumber < randomNumber) {
        displayText.innerText = "Your guessed number is lower than the actual number."
    }
    else {
        displayText.innerText = "Your guessed number is out of the range.";
    }
    userGuesses.push(userInput.value)
    para[0].innerText = userGuesses;

    counter++;
    userInput.value = "";
    // let randomNumber = Math.floor(Math.random() * 100) + 1;

}

const resetGame = () => {
    const userInput = document.getElementById("input-text")
    const para = document.getElementsByClassName("outputs");
    userInput.value = "";
    counter = 0;
    userGuesses = [];
    para[0].innerText = "";
    randomNumber = Math.floor(Math.random() * 100) + 1;
    displayText.innerText = `Current Random Number is: ${randomNumber}`;

    console.log('called');

}
