// first set the variables and an alphabet for the computer to choose from

var guess;
var guesses = [];
var wins = 0;
var losses = 0;
var lives = 9;
var computer = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var computerChoice;

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var livesText = document.getElementById("lives");
var guessesText = document.getElementById("guesses");
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
livesText.textContent = "Guesses left: " + lives;
guessesText.textContent = "Your Guesses so far:" + guesses;

//Start the game with the computer making a choice, also this function is used to restart the game

function start() {
  computerChoice = computer[Math.floor(Math.random() * computer.length)];
  console.log("comp " + computerChoice);
  guesses.length = 0;
  lives = 10;
}
start();

// user then makes their guesses running through if else statement, adding to a string of guesses while counting and updating the stats

document.onkeydown = function(event) {
  var guess = event.key;
  console.log(guess);
  guesses.push(guess);
  console.log(guesses);
  guessesText.textContent = "Your Guesses so far:" + guesses;

  if (computerChoice == guess) {
    console.log("Win");
    wins++;
    console.log("Num of wins " + wins);
    winsText.textContent = "Wins: " + wins;
    start();
  } else if (lives == 1) {
    console.log("final wrong");
    losses++;
    console.log("Num of loses " + losses);
    lossesText.textContent = "Losses: " + losses;
    start();
  } else console.log("wrong");
  lives--;
  console.log("Num of lives " + lives);
  livesText.textContent = "Guesses left: " + lives;
};
