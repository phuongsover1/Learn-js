'use strict';

const Person = function(firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;

	// Never do this
	// this.calcAge = function() {
	// 	console.log(2037 - this.birthYear);
	// };
};

const jonas = new Person('Jonas', 1983);
console.log(jonas);
console.log(jonas.firstName);

// Behind the scene
// 1.New {} is created
// 2.function is called, this = {}
// 3.{} is linked to prototype
// 4.function automatically return {}

const matilda = new Person('Matilda', 1991);
const jack = 'jack';

console.log(jonas instanceof Person);
console.log(matilda instanceof Person);
console.log(jack instanceof Person);
