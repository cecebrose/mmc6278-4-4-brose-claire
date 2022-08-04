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

var selectedWord= ""
var displayWord= ""
var previousWord= ""
var incorrectLetters= []
var remainingGuesses= 10;
var wins = 0;
var losses = 0;

function startGame() {
/* math.floor rounds DOWN to the nearest whole number & math.ceil rounds UP to the nearest whole number */
/* math.round rounds either direction */
  if (selectedWord){
    previousWord=selectedWord
    incorrectLetters=[]
    remainingGuesses=10;
  };
  
  var randomNum=Math.floor(Math.random()*11);
  selectedWord=words[randomNum];
  displayWord=selectedWord.replaceAll(/[\w]/g, "_") /* g=global */
  updateDisplay();
};

function handleKeyUp(e){
  var keyPressed = e.key.toLowerCase();
  if (incorrectLetters.includes(keyPressed)||!/^[a-z]$/i.test(keyPressed))/* || = double pipes aka "or" */ {
    return
  }

  if (selectedWord.includes(keyPressed)){
    var matchingLocations=[]
    for (var i=0; i<selectedWord.length; i++){
      if (selectedWord[i]===keyPressed){
        matchingLocations.push(i);
      }
    }

    for (var j=0; j<matchingLocations.length; j++){
      displayWord=`${displayWord.substring(0,matchingLocations[j])}${keyPressed}${displayWord.substring(matchingLocations[j]+1)}`
    }

  }
  else {
    incorrectLetters.push(keyPressed)
    remainingGuesses --
  }
  isGameOver()
  updateDisplay()
};

function isGameOver(){
var gameOver=false;
if (!displayWord.includes("_")){
  wins++ 
  gameOver=true;
}
if (remainingGuesses===0){
  losses++
  gameOver=true;
}
if (gameOver){
  startGame()
}
};

function updateDisplay() {
  console.log("updating");
  document.getElementById("word-to-guess").innerHTML = displayWord;
  document.getElementById("previous-word").innerHTML = previousWord;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("incorrect-letters").innerHTML = incorrectLetters;
  document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
};

document.onkeyup=handleKeyUp;
document.onload=startGame();