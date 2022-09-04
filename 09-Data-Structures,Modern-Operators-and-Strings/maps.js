'use strict';

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze,Italy');
// run set() method will return the updated map 

console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set(true, 'We are open :D');
rest.set(false, 'We are closed :(');

console.log(rest.get(true));
console.log(rest.get('name'));
console.log(rest.get('Phuong'));

rest.set('open', 11).set('close', 23);

// The power of having boolean values as a key 
console.log(rest);
let time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));


time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// If a map has a key 
console.log(rest.has('categories'));

// delete a key from a map 
rest.delete(2);
console.log(rest);

// return nubmer of key in a map 
console.log(rest.size);


// // Problems occur when using object as a key 
// rest.set([1, 2], 'Test');
// console.log(rest);
// console.log(rest.get([1, 2]));

// Solution: 
const arr = [
	1, 2
];

rest.set(arr, 'Test');
console.log(rest.get(arr));
