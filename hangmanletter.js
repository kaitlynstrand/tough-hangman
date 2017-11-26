
function HangmanLetter(letter, guessCorrect) {
	this.letter = letter,
	this.guessCorrect = false
	this.displayGuess = function() {
		if (this.guessCorrect) {
			return this.letter
		} else {
			return "_"
		}
	}	
	this.checkLetter = function(userGuess) {
		if (userGuess === this.letter) {
			this.guessCorrect = true
		}
	}
}

module.exports = HangmanLetter