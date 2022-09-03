
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

	oderPasta: function(ing1, ing2, ing3) {
		console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
	}
};

// Real-world examples
// const readline = require('readline-sync');
//
// const ingredients = [
// 	readline.question('Let\'s make pasta! Ingredient 1? '),
// 	readline.question('Ingredient 2? '),
// 	readline.question('Ingredient 3? ')
// ];
//
// console.log(ingredients);
//
// restaurant.oderPasta(...ingredients); // Instead of restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2])

// ES8: Objects: copy restaurant object and add some others properties
// const newRestaurant = {
// 	foundedIn: 1998,
// 	...restaurant,
// 	founder: 'Guiseppe'
// };
// console.log(newRestaurant);




// Shallow copy objects
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Rona';
console.log(restaurantCopy.name);
console.log(restaurant.name);


// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenu = [...restaurant.mainMenu]; // shallow copy
// console.log('mainMenu', mainMenu);
//
//
// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log('menu:', menu);
//
// // Iterables: arrays, strings, maps, sets, NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
//
// // pass each letter of str to each parameter in function
// console.log(...str); // equals console.log('J','o','n','a','s');

// Not working because in ${} expects an expression, not mutiple values separated by a comma
// console.log(`${...str} Schredtmann`);







// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr); // [1,2,3,7,8,9]
//
// const newArr = [1, 2, ...arr];
// console.log(newArr); // [1,2,7,8,9]
//
// const newArr1 = [...arr, 1, 2];
// console.log(newArr1); // [7,8,9,1,2]
//
// // use ... to pass the individual elements of the array to function parameter 
// console.log(...newArr); // equals console.log(1,2,7,8,9)
//




