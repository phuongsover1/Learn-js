'use strict';

const ordersSet = new Set([
	'Pasta',
	'Pizza',
	'Pizza',
	'Risotto',
	'Pasta',
	'Pizza'
]);
console.log(ordersSet);


console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);
ordersSet.delete('Risotto');
console.log(ordersSet);


console.log(ordersSet[0]);

for (const order of ordersSet) {
	console.log(order);
}

// Example of converting set to an array
console.log('---- Example ----');
const staff = [
	'Waiter',
	'Chef',
	'Waiter',
	'Manger',
	'Chef',
	'Waiter'
];

const staffUnique = [
	...new Set(staff)
];

console.log(staffUnique);


