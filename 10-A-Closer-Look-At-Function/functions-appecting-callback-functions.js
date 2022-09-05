'use strict';

function oneWord(str) {
	return str.replace(/ /g, '').toLowerCase();
}

function upperFirstWord(str) {
	const [first, ...others] = str.split(' ');
	return [first.toUpperCase(), ...others].join(' ');
}


// Higher-order function 
function transformer(str, fn) {
	console.log(`Original string: ${str}`);
	console.log(`Transformed String: ${fn(str)}`);
	console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best', oneWord);

// JS uses callbacks all the time 
function high5() {
	console.log('High5!');
}
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adan'].forEach(high5);

