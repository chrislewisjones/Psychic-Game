var guess;
var wins = 0;
var losses = 0;
var guesses = [];
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

var computerChoice = computer[Math.floor(Math.random() * computer.length)];
console.log(computerChoice);

document.onkeydown = function(event) {
  var guess = event.key;
  console.log(guess);
  guesses.push(guess);
  console.log(guesses);
  if (computerChoice == guess) {
    console.log("Win");
    wins++;
    console.log(wins);
    lives = 9;
    guesses.length = 0;
  } else if (lives == 0) {
    console.log("final wrong");
    losses++;
    console.log(losses);
    lives = 9;
    guesses.length = 0;
  } else console.log("wrong");
  lives--;
  console.log(lives);
};

var one = document.getElementById("wins");
one.textContent = wins;
var two = document.getElementById("losses");
two.textContent = losses;
var three = document.getElementById("lives");
three.textContent = lives;
var four = document.getElementById("guesses");
four.textContent = guesses;
