'use strict';

const flight = 'LH234';
const jonas = {
	name: 'Jonas Schmedtmann',
	passport: 24739479284,
};


function checkIn(flightNum, passenger) {
	flightNum = 'LH999';
	passenger.name = 'Mr. ' + passenger.name;

	passenger.passport === 24739479284 ? console.log('Checked in') : console.log('Wrong passport');
}

checkIn(flight, jonas);
console.log(flight); // LH234
console.log(jonas);

// Is the same as doing ...
const flightNum = flight;
const passenger = jonas;
