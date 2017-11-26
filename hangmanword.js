var HangmanLetter = require("./hangmanletter.js")

//need to go through word array and pick a word
function HangmanWord (word) {
	this.word = word;
	this.wordLetterArray = [];
	//this.wordDisplayArray = [];
	
	this.newLetterArray = function() {
		for (var i = 0; i < this.word.length; i++) {
			var newLetter = new HangmanLetter(this.word[i]);
			this.wordLetterArray.push(newLetter);
		}
	}
	this.newDisplayArray = function() {
		var wordDisplayArray = []
		for (var i = 0; i < this.wordLetterArray.length; i++) {
			wordDisplayArray.push(this.wordLetterArray[i].displayGuess())
		}
		console.log(wordDisplayArray.join(" "))	
	}
	this.checkUserGuess = function(userGuess) {
		for (var i = 0; i < this.wordLetterArray.length; i++) {
			this.wordLetterArray[i].checkLetter(userGuess)
		}
		this.newDisplayArray()
	}

}

module.exports = HangmanWord 