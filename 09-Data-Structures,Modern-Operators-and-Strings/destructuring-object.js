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
};

// pass an object to an function, and inside that function we destructuring that object
restaurant.orderDelivery({
	time: '22:30',
	address: 'Via del Sole, 21',
	mainIndex: 2,
	starterIndex: 2,
});

restaurant.orderDelivery({
	address: '44, duong 17/4',
	starterIndex: 1
});




// // Nested objects
// const { fri: { open, close } } = restaurant.openingHours;
// console.log(open, close);
//
// const { sat: { open: satOpen, close: satClose } } = restaurant.openingHours;
// console.log(satOpen, satClose);






// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {
// 	a: 23, b: 7, c: 14
// };
//
// // Lỗi vì {a,b} nó hiểu là block 
// // { a, b } = obj;
//
// ({ a, b } = obj);
// console.log(a, b);




// // Destructing object with default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);




// const {
// 	name: restaurantName,
// 	openingHours: hours,
// 	categories: tags
// } = restaurant;
//
// console.log(restaurantName, hours, tags);



// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
