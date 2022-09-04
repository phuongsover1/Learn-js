'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A325';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));


console.log(airline.slice(4));
console.log(airline.slice(4, 7)); // AIR

// Slice the first word.
const firstWord = airline.slice(0, airline.indexOf(' '));
console.log(firstWord); // TAP

// Slice the last word.
const lastWord = airline.slice(airline.lastIndexOf(' ') + 1);
console.log(lastWord); // Portugal


console.log(airline.slice(-2)); // al

console.log(airline.slice(1, -1));

function checkMiddleSeat(seat) {
	const lastLetter = seat.slice(-1);
	return lastLetter === 'B' || lastLetter === 'E';
}

console.log(checkMiddleSeat('11A'));
