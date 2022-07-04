var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

function onStart() {
  updateDisplay();
  document.addEventListener("keyup", onGuess);
var currentWordIndex = 0;
var attempts = 0;
var guessedLetters = [];
var wins = 0;
var losses = 0;
};

function onGuess(event) {
  var keyPressed = event.key.toUpperCase();
  console.log(keyPressed);


  if (keyPressed){
      if (guessedLetters.indexOf(keyPressed) === -1) {
          guessedLetters.push(keyPressed);
          attempts++;
          updateDisplay();
          if (isRoundLost()) {
              losses++;
              goToNextWord();
              return;
          } else if (isRoundWon()) {
              wins++;
              goToNextWord();
              return;
          }
      }
  }
};

function getWord() {
  return (currentWordLetters().map(function (letter) {
      if (guessedLetters.indexOf(letter) === -1) {
          return "&nbsp";
      } else {
          return letter;
      }
  }
  ));
};

function goToNextWord() {
  currentWordIndex++;
  attempts = 0;
  guessedLetters = [];
  updateDisplay();
};
function isRoundLost() {
  return (getGuessesAllowed() - attempts === 0);
}

function isRoundWon() {
  return (getWordToGuess().indexOf("&nbsp") === -1);
}
function isLetterOnly(character) {
  if (character.length !== 1) {
      return false;
  }
  var checker = /^[A-Z]+$/i.test(character);
  return checker;
}
function updateDisplay() {
  document.getElementById("word-to-guess").innerHTML = guessedLetters.reduce(function (list, letter) {
      return (list + letter + " ");
  }, "");
  showGameBoard();
  document.getElementById("previous-word").innerHTML = showPreviousWord() - attempts;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("score").innerHTML = score;
  document.getElementById("remaining-guesses").innerHTML = getGuessesAllowed(10) - attempts;
};

function currentWordLetters() {
  return (words[currentWordIndex].split(""));
};
