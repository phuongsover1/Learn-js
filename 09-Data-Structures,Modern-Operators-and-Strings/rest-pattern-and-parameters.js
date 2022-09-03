
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

// 1)Destructuring

// Objects 
let { ...weekdays } = restaurant.openingHours;
console.log('before:', weekdays);

let sat;
({ sat, ...weekdays } = restaurant.openingHours);
console.log('after: ');
console.log(sat);
console.log(weekdays);




// const [pizza, , risotto, ...otherFood] = [
// 	...restaurant.mainMenu,
// 	...restaurant.starterMenu
// ];
//
// console.log(pizza, risotto, otherFood);

// // SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
//
// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);


// 2) Function
// const add = function(...numbers) {
// 	return numbers.reduce((num1, num2) => num1 + num2);
// };
//
// console.log(add(1, 2));
// console.log(add(1, 2, 3));
//
// const x = [23, 5, 1];
// console.log(add(...x));


restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
