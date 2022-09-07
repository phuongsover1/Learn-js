'use strict';


// Strings
const owners = [
	'Jonas',
	'Zach',
	'Adam',
	'Martha'
];

console.log(owners.sort());
console.log(owners);


// Numbers 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('---- NUMBER ----');
console.log(movements);

// Accending order
// movements.sort((a, b) => {
// 	if (a > b) return 1;
// 	if (a < b) return -1;
// });
movements.sort((a, b) => a - b);

console.log('---- Accending Order ----');
console.log(movements);


console.log('---- Decending Order ----');
// movements.sort((a, b) => {
// 	if (a < b) return 1;
// 	if (a > b) return -1;
// });
movements.sort((a, b) => b - a);
console.log(movements);



