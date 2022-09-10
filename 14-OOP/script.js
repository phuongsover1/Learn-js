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

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function() {
	console.log(2037 - this.birthYear);
};

jonas.calcAge();
console.log(jonas);

// Print the prototype of object
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));


Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

// class expression
// const PersonCl = class {
//
// };


// class Declaration
class PersonCl {
	constructor(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;

		this.doSomething = function() {
			console.log('doSomething');
		};
	}

	// Methods will be added to .prototype property
	calcAge() {
		console.log(2037 - this.birthYear);
	}
}

const jessica = new PersonCl('jessica', 1996);

console.log(jessica);

PersonCl.prototype.greet = function() {
	console.log(`Hey ${this.firstName}`);
};


jessica.greet();

// // Setter and getter in regular object 
// const account = {
// 	owner: 'Jonas',
// 	movements: [200, 540, 120, 300],
//
// 	get latest() {
// 		return this.movements.slice(-1).pop();
// 	},
//
// 	set latest(mov) {
// 		this.movements.push(mov);
// 	}
// };
//
//
// console.log(account.latest);
//
// console.log('---- Setter ----');
// account.latest = 5000;
// console.log(account);
//
