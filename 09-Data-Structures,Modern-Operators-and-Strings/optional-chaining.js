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

// console.log(openingHours);

const restaurant = {
	name: 'Classico Italiano',
	locaton: 'Via Angelo Tavanti 23, Firenze, Itaty',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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

// Before we access value of a key in an object, we should first check if that key is exists.
// Not using optional Chaining.
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// if some restaurant doesn't have openingHours then 
if (restaurant.openingHours)
	if (restaurant.openingHours.mon) {
		console.log(restaurant.openingHours.mon.open);

	}


// Using Optional Chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);



const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
	// Use ?? instead of || because retaurant also opening at 0
	const open = restaurant.openingHours[day]?.open ?? 'closed';
	console.log(`On ${day}, we open at ${open}`);
}


// Optional Chaining on methods of object
console.log(restaurant.order?.(0, 1) ?? 'Method does not exists');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exists');


// Optional Chaining checking if an array is empty.
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
const users = [];

console.log(users[0]?.name ?? 'User array empty');
