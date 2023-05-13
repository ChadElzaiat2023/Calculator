const readline = require('readline');

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});



reader.question("What would you like to calculate?", function (input) {
	const tokens = input.split(' ');

	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);
	console.log('MathSymbol', mathSymbol);
	console.log('num1', num1);
	console.log('num2', num2);

if (mathSymbol === "+") { console.log(num1 + num2)}
if (mathSymbol === "-") { console.log (num1 - num2)}
if (mathSymbol === "x") { console.log (num1 * num2)}
if (mathSymbol === "/") { console.log (num1 / num2)}
if (mathSymbol === "a") {console.log (Math.sqrt(num1))}

	//if math symbol = - num1 from num2 we will console.log the answer* /
	// if the math symbol = + we will num + num2 we will console.log the answer 
	// This line closes the connection to the command line interface.
	reader.close()

});