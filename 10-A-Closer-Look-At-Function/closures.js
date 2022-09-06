'use strict';

const secureBooking = function() {
	let passengerCount = 0;

	return function() {
		passengerCount++;
		console.log('passengerCount:', passengerCount);
	};
};

const booker = secureBooking();

booker();
booker();
booker();

// More Example 
let f;

const g = function() {
	const a = 23;
	f = function() {
		console.log(a * 2);
	};
};



const h = function() {
	const b = 777;
	f = function() {
		console.log(b * 2);
	};
};


g();
f();

// Re-assign f function 
h();
f();

// Example 2 
const boardPassengers = function(n, wait) {
	const perGroup = n / 3;

	setTimeout(function() {
		console.log(`We are now boarding all ${n} passenger`);
		console.log(`There are 3 groups, each with ${perGroup} passengers`);
	}, wait * 1000);
};

boardPassengers(180, 3);
