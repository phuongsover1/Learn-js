'use strict';

const arr = [2, 3, 4];

const [x, y, z] = arr;

console.log(x, y, z);

const restaurant = {
	name: 'Classico Italiano',
	locaton: 'Via Angelo Tavanti 23, Firenze, Itaty',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	order: function(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	}
};

// const nested = [2, 4, [5, 6]];
// const [i, , [k, l]] = nested;
// console.log(i, k, l);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);

// let [first, , second] = restaurant.categories;
// console.log(first, second);
//
// [first, second] = [second, first];
//
// // const [first, second] = restaurant.categories;
// // console.log(first, second);
