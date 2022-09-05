'use strict';

const lufthansa = {
	airline: 'Lufthansa',
	iataCode: 'LH',
	bookings: [],

	book(flightNum, name) {
		console.log(
			`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
		);
		this.bookings.push({
			flightNum,
			name
		});
	}
};


lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
	airline: 'Eurowings',
	iataCode: 'EW',
	bookings: [],
};

const book = lufthansa.book;

// Does NOT work 
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Phuong Nguyen');

console.log(lufthansa);


// Apply method
const flightData = [583, 'Geogre Cooper'];
book.apply(eurowings, flightData);

// is the same as 
book.call(eurowings, ...flightData);
