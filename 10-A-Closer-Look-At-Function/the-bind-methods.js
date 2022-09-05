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


const eurowings = {
	airline: 'Eurowings',
	iataCode: 'EW',
	bookings: [],
};



// Bind method
const book = lufthansa.book;

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(23, 'Steven Williams');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas');
bookEW23('Phuong');
console.log(eurowings);


// Commony Use with Event Listeners 
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
	console.log(this);

	this.planes++;
	console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// Partial application 
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.18, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

// Rewrite addTax using function return another function 
const addTax1 = function(rate) {
	return function(value) {
		return value + value * rate;
	};
};

const addVAT1 = addTax1(0.2);

console.log(addVAT1(500));
