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

// Static method on constructor object
Person.hey = function() {
	console.log('Hi there!');
};

console.log('---- Static Method Constructor function ----');
Person.hey();

// jonas.hey(); // Not working

// class expression
// const PersonCl = class {
//
// };


// Setter and getter in regular object 
const account = {
	owner: 'Jonas',
	movements: [200, 540, 120, 300],

	get latest() {
		return this.movements.slice(-1).pop();
	},

	set latest(mov) {
		this.movements.push(mov);
	}
};


console.log(account.latest);

console.log('---- Setter ----');
account.latest = 5000;
console.log(account);

// class Declaration
class PersonCl {
	constructor(fullName, birthYear) {
		this.fullName = fullName;
		this.birthYear = birthYear;

		this.doSomething = function() {
			console.log('doSomething');
		};
	}

	// Instance method
	// Methods will be added to .prototype property
	calcAge() {
		console.log(2037 - this.birthYear);
	}

	get age() {
		return 2037 - this.birthYear;
	}

	// Set a property that already exists
	set fullName(name) {
		console.log(name);
		if (name.includes(' ')) this._fullName = name;
		else alert('`${name}` is not a full name!');
	}

	get fullName() {
		return this._fullName;
	}

	// Static method 
	static hey() {
		console.log('--- hey in PersonCl ----');
		console.log(this);
	}

}

const jessica = new PersonCl('Jessica David', 1870);
console.log(jessica);


console.log('---- Getter ----');
console.log(jessica.fullName);

// console.log(Number.parseFloat('1.2'));
// Number(3).parseFloat();

PersonCl.hey();

// jessica.hey(); // Not working





// Using object using Object.create
const PersonProto = {
	calcAge() {
		console.log(2037 - this.birthYear);
	},

	// Constructor 
	init(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	}
};


const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2001;
steven.calcAge();


console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2000);
sarah.calcAge();
console.log(sarah);
