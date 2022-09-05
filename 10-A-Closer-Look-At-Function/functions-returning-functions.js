'use strict';

function greet(greeting) {
	return function(name) {
		console.log(`${greeting} ${name}`);
	};
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// Rewrite function using arrow function 
const greet1 = (greeting) => {
	return (name) => {
		console.log(`${greeting} ${name}`);
	};
};


const greeterHi = greet1('Hi!');
greeterHi('Phuong');
greeterHi('Khang');
