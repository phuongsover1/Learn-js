'use strict';


const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas 
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails 
const email = ' Hello@Jonas.Io \n';
console.log(email);
console.log(email.trim().toLowerCase() === 'hello@jonas.io');


// replacing
const priceUS = '288,98$';
const priceVN = priceUS.replace('$', 'VND').replace(',', '.');
console.log(priceVN); // 288.98VND


const announcement = 'All passengers come to boarding door 23. Boarding door 23!(test regex: indoor)';
console.log(announcement.replace(/\bdoor\b/g, 'gate'));


// Booleans
const plane = 'Airbus A320neo';

console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('Airb')); // true

(plane.startsWith('Airbus') && plane.endsWith('neo')) && console.log('Part of the NEW Airbus family');


// Practice exercice 
function checkBaggage(items) {
	const baggage = items.toLowerCase();
	if (baggage.includes('knife') || baggage.includes('gun')) {
		console.log('You are NOT allowed on board');
	} else
		console.log('Welcome aboard!');
}


checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
