var HangmanWord = require("./hangmanword.js");
var inquirer = require('inquirer');

var remainingGuesses = 10;

var gameWordArray = ['red', 'blue', 'green', 'yellow'];
var chosenWord = gameWordArray[Math.floor(Math.random() * gameWordArray.length)];
var hangmanWord = new HangmanWord(chosenWord);
hangmanWord.newLetterArray();
//console.log("HI")


// function checkUserGuess() {
// 	for ()


// }

hangmanWord.newDisplayArray()

inquirer.prompt([
	{
		type: "input",
		name: "letterGuess",
		message: "Pick a Letter!"
	},

]).then(function(user) {
	hangmanWord.checkUserGuess(user.letterGuess)
	
	console.log(user.letterGuess)
	console.log("false")
})


// function userLetterCheck() {
// 	if (lettersGuessed.includes(userLetterGuess)) {
// 		return '_'
// 	} else {
// 		showPlayer = new Display(currentWord);
// 		checkLetter = new Check(currentWord);
// 	}
// 	wordsPlayed.push(currentWord);
// 	console.log(wordsPlayed);
// }

// }

// function restartHangman() {

// }


