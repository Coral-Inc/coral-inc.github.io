let word = "";
let lastWordDate = null;
let attempts = 0;
let guessedWords = [];

function getNewWord() {
  // Generate a new word (e.g. from an array of possible words)
  word = "apple";
  lastWordDate = new Date();
}

function validateWord(guess) {
  // Validation code

  if (guess === word) {
    alert("You won!");
    getNewWord();
    return true;
  }

  guessedWords.push(guess);

  const guessedWordsList = document.getElementById("guessed-words");
  
  // Remove the dot from each guessed word
  guessedWordsList.innerHTML = guessedWords.map((word) => `<li>${word.replace(".", "")}</li>`).join("");

  attempts++;

  if (attempts >= 6) {
    alert(`You lost. The word was ${word}.`);
    getNewWord();
    return true;
  }

  return false;
}

function checkLastWordDate() {
  const now = new Date();

  if (lastWordDate === null || (now - lastWordDate) / (1000 * 60 * 60) >= 24) {
    getNewWord();
  }
}

checkLastWordDate();

const form = document.getElementById("wordle-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const guess = document.getElementById("word-input").value.toLowerCase();
  validateWord(guess);
  document.getElementById("word-input").value = "";
});
