let letters = ["a","b","c"]

let guessedLetters = [];

let letterToGuess = null;

let guessesLeft = 9;

let wins = 0;

let losses = 0;

const updateGuessesLeft = () => {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
}

const updateLetterToGuess = () => {
    letterToGuess = letters[Math.floor(Math.random * letters.lenght)];
}

const updateGuessesSoFar = () => {
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
}

const reset = () => {
    guessesLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

document.onkeydown = (event) => {
    guessesLeft--;
    let letter = event.key.toLowerCase();
// add the guess into the array
    guessedLetters.push(letter);


updateGuessesLeft();
updateGuessesSoFar();

if(letter === letterToGuess){
wins++;
document.querySelector("#wins").innerHTML = wins;
reset();
}

if(guessesLeft === 0){
    losses++;
    document.querySelector("#losses").innerHTML = losses;
    reset();
    }

}
