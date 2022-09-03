'use strict';
const rest1 = {
	name: 'Capri',
	numGuests: 0
};

const rest2 = {
	name: 'La Piazza',
	owner: 'Giovanni Rossi'
};

console.log('---- Nullish ----');
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1.numGuests);
console.log(rest2.numGuests);


console.log('---- AND ----');
// AND assignment operator ==> Assign sth if exist, else not doing anything
rest1.owner &&= '<Anonymous>';
rest2.owner &&= '<Anonymous>';
console.log(rest1);
console.log(rest2);



console.log('---- OR ----');
// OR assignment operator
// instead of using this 
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// ==> Using OR asssignment operator 
// But if object has numGuests property in the beginning and it's value = 0 then we get an incorrect values ==> Using Nullish assignment opeator
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1.numGuests);
console.log(rest2.numGuests);

