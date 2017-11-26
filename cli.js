var inquirer = require('inquirer')

inquirer.prompt(([
{


}]))

 var check = require('./word.js');
  
  var currentWord;
 -var remainingGuesses = 1;
 +var remainingGuesses = 8;
  var wins = 0;
  var losses = 0;
 -
 +var showPlayer = [];
 +var checkLetter = [];
 +var wordsPlayed = [];
  
  function selectRandomWord(){
 -	var x = Math.floor(Math.random() * 10)
 +	var x = Math.floor(Math.random() * 27)
  	currentWord = words.possibleWords[x];
 +	//only allows words which have not been played in the current session
 +	if(wordsPlayed.includes(currentWord)){
 +		selectRandomWord();
 +	}
 +	else{
 +		showPlayer = new Display(currentWord);
 +		checkLetter = new Check(currentWord);
 +	}
 +	wordsPlayed.push(currentWord);
 +	console.log(wordsPlayed);
  }
  
  function restartGame(){
 @@ -25,6 +37,10 @@ function restartGame(){
  		if(confirm == 'y'){
  			remainingGuesses = 8;
  			checkLetter.lettersGuessed = [];
 +			currentWord = '';
 +			checkLetter.currentWordArray = [];
 +
 +			selectRandomWord();
  			console.log('');
  			console.log('');
  			console.log('=========================================================');
 @@ -38,15 +54,15 @@ function restartGame(){
  			console.log('');
  			console.log('Guesses Remaining: ' + remainingGuesses);
  			console.log('');
 -
 -			selectRandomWord();
  			guessLetters();
  		}
  		else if(confirm == 'n'){
  			console.log('Thanks for playing!')
 +			console.log('');
  		}
  		else{
  			console.log('Please select \'y\' or \'n\'');
 +			console.log('');
  			restartGame();
  		}
  	})
 @@ -57,8 +73,6 @@ function restartGame(){
  //START GAME------------------------------------------------------------
  //select a random word from the state capital array 
  selectRandomWord();
 -var showPlayer = new Display(currentWord);
 -var checkLetter = new Check(currentWord);
  
  // This is for TROUBLESHOOTING - it provides the correct answer
  // console.log('the word is: ' + currentWord);
 @@ -70,10 +84,10 @@ console.log('');
  console.log('=========================================================');
  console.log('HANGMAN');
  console.log('=========================================================');
 -console.log('Welcome to the hangman man game - state capital edition.');
 +console.log('Welcome to the hangman man game - State Capital Edition.');
  console.log('Let\'s get to guessing!');
  console.log('');
 -console.log('Guess This Word:'); 
 +console.log('Guess This STATE CAPITAL:'); 
  showPlayer.originalDisplay();
  console.log('');
  console.log('Guesses Remaining: ' + remainingGuesses);
 @@ -93,6 +107,7 @@ var guessLetters = function(){
  		if(letter.match(letters)){
  			if(checkLetter.lettersGuessed.includes(letter)){
  				console.log('You have already guessed that letter');
 +				showPlayer.updatedDisplay(letter);
  				console.log('Letters Guessed: ' + checkLetter.lettersGuessed);
  				console.log('Guesses Remaining: ' + remainingGuesses);
  				console.log('-------------------------------------------------------');