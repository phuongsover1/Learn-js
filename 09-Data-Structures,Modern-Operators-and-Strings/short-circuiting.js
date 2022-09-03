'use strict';

const restaurant = {
	name: 'Classico Italiano',
	locaton: 'Via Angelo Tavanti 23, Firenze, Itaty',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},

	order: function(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

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
console.log('---- OR ----');
// // Use ANY data type, return ANY data type, shor-circuiting
// console.log(3 || 'Jonas'); // 3
// console.log('' || 'Jonas'); // 'Jonas'
// console.log(true || 0); // true
// console.log(undefined || null); // null
//
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello'

// Real-world example
restaurant.numGuests = 23;

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

// Using short-circuiting
const guest2 = restaurant.numGuests || 10;
console.log(guest2);


console.log('---- AND ----');
console.log(0 && 'Jonas');  // 0
console.log(7 && 'Jonas'); //  'Jonas'


console.log('Hello' && 23 && null && 'jonas'); // null


// Practical example
if (restaurant.orderPizza) {
	restaurant.orderPizza('mushroom', 'spinach');
}
// ==> Using short-circuiting
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
