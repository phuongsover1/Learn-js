'use strict';


const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
	[weekdays[3]]: {
		open: 12,
		close: 22,
	},
	[weekdays[4]]: {
		open: 11,
		close: 23,
	},
	[weekdays[5]]: {
		open: 0, // Open 24 hours
		close: 24,
	}
};

console.log(openingHours);

const restaurant = {
	name: 'Classico Italiano',
	locaton: 'Via Angelo Tavanti 23, Firenze, Itaty',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
	// // pre ES6 
	// openingHours: openingHours,

	// after ES6
	openingHours,

	// Method after ES6
	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	// Method pre ES6
	orderDelivery: function({ starterIndex = 1, mainIndex = 0, time: time = '20:00', address }) {
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
			will be delivered to ${address} at ${time}`
		);
	},

	orderPizza: function(mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},
};

// Property NAMES
console.log('---- NAME ----');
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties)
	openStr += ` ${day},`;

console.log(openStr);



// property VALUES
console.log('---- VALUES ----');
const values = Object.values(openingHours);
console.log(values);




// Entire object
console.log('---- ENTRIES ----');
const entries = Object.entries(openingHours);

for (const [key, { open, close }] of entries) {
	console.log(`On ${key} we open at ${open} and close at ${close}`);
}
