var inquirer = require('inquirer')

var start = function () {
	inquirer.prompt([
	{
		type: 'input',
		message: 'Yo what you want?',
		name: 'wanted'
	}

	]).then(function(result) {
		if (result.wanted === 'money') {
			whichMoney()
		} else {

		}
	})

}

var whichMoney = function() {

	inquirer.prompt([
	{
		type: 'input',
		message: 'What kind of money?',
		name: 'moneyType'
	}
	]).then(function(result) {
		console.log(result)

		if(result.moneyType !== 'ZIM') {
			start()
		}
	})
}

start()