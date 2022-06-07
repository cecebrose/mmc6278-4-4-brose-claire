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
];
console.log(words)

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
console.log(alphabet)

function onStart() {
  updateDisplay();
  document.addEventListener("keyup", onGuess);
}

function onGuess(event) {
  var keyPressed = event.key.toUpperCase();
  if (isLetterOnly(keyPressed)) {
      if (guessedLetters.indexOf(keyPressed) === -1) {
          guessedLetters.push(keyPressed);
          attempts++;
          updateDisplay();

function isLetterOnly(character) {
    if (character.length !== 1) {
    return false;}
    var checker = /^[A-Z]+$/i.test(character);
    return checker;}

console.log (isLetterOnly);

function updateDisplay() {
  document.getElementById("wordToGuess").innerHTML = guessedLetters.reduce(function (list, letter) {
      return (list + letter + " ");
  }, "");

function wordToGuess(array) {
  return array[Math.floor(Math.random() * array.length)].toUpperCase()
}

var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft, guessedLetters, letterToGuess;

resetGame();
display();

var wordToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(wordToGuess)

document.onkeyup = function(event) {
  var userGuess = event.key;

  if(userGuess === letterToGuess){
    wins();
  }else if (guessesLeft - 1 === 0){
    losses();
  }else{
    fail(guess);
  }

  for (var i = 0; i < currentWord.length; i++) {
    progressWord.push("__");
    progressWord.toString()
    document.getElementById("word-guess").innerHTML = progressWord.join(" ");
  console.log(progressWord);
  }


  document.onkeyup = function(onKeyUp) {
    letter = onKeyUp.keyCode;
    lettersGuessed = String.fromCharCode(letter);
    console.log(lettersGuessed);
  }

  currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
  console.log(currentWord);


  function display() {
    var wordToGuessP = document.getElementById("word-to-guess")
    var winsP = document.getElementById("wins");
    var lossesP = document.getElementById("losses");
    var incorrectLettersP = document.getElementById("incorrect-letters");
    var remainingGuesses = document.getElementById("remaining-guesses");

    wordToGuessP.innerHTML = wordToGuess;
    winsP.innerHTML = wins;
    lossesP.innerHTML = losses;
    incorrectLettersP.innerHTML = incorrectLetters;
    remainingGuesses.innerHTML = remainingGuesses.join(',');
  }
  console.log(wordToGuess, wins, losses, incorrectLetters, remainingGuesses);
}

