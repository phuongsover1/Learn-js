'use strict';

const bookings = [];

function createBooking(
	flightNum = 'LH000',
	numPassengers = 1,
	price = 199 * numPassengers) {

	// ES5
	// flightNum ||= 'LH000';
	// numPassengers ||= 1;
	// price ||= 199;

	const booking = {
		flightNum,
		numPassengers,
		price,
	};
	console.log(booking);
	bookings.push(booking);
}
createBooking('LH123');
createBooking();
createBooking('LH123', 2);
createBooking('LH123', 5);

// Skip parameter 
console.log('---- SKIP PARAMETER ----');
createBooking('LH123', undefined, 1000);
