'use strict';


// Split and join
console.log('a+very+nice+string'.split('+')); // ["a", "very", "nice", "string"]
console.log('Jonas Schmedtmann'.split(' ')); //  ["Jonas", "Schmedtmann"]

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName, lastName); // Jonas Schmedtmann

const newName = [
	'Mr.',
	firstName,
	lastName.toUpperCase()
].join(' '); // Mr. Jonas SCHMEDTMANN
console.log(newName);


// capitalizedName
const passenger = 'jessica ann smith davis';
const capitalizedName = passenger.trim()
	.toLowerCase()
	.split(' ')
	.map(word => word[0].toUpperCase() + word.slice(1))
	.join(' ');

console.log(capitalizedName);



// Padding 
const message = 'Go to gate 23!';
const name = 'Jonas';

console.log(message.padStart(25, '+'));
console.log(name.padStart(25, '+'));

console.log(message.padEnd(25, '+'));
console.log(name.padEnd(25, '+'));

function maskCreditCard(number) {
	const str = number + ''; // Convert to String 
	const last = str.slice(-4);
	return last.padStart(str.length, '*');
}

console.log(maskCreditCard(64637836)); // ****7836

// Repeat
const message2 = 'Bad weather... All departures Delayed... ';
console.log(message2.repeat(5));
