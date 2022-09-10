'use strict';

// const Person = function(firstName, birthYear) {
// 	this.firstName = firstName;
// 	this.birthYear = birthYear;
//
// 	// Never do this
// 	// this.calcAge = function() {
// 	// 	console.log(2037 - this.birthYear);
// 	// };
// };
//
// const jonas = new Person('Jonas', 1983);
// console.log(jonas);
// console.log(jonas.firstName);
//
// // Behind the scene
// // 1.New {} is created
// // 2.function is called, this = {}
// // 3.{} is linked to prototype
// // 4.function automatically return {}
//
// const matilda = new Person('Matilda', 1991);
// const jack = 'jack';
//
// console.log(jonas instanceof Person);
// console.log(matilda instanceof Person);
// console.log(jack instanceof Person);
//
// // Prototypes
// console.log(Person.prototype);
//
// Person.prototype.calcAge = function() {
// 	console.log(2037 - this.birthYear);
// };
//
// jonas.calcAge();
// console.log(jonas);
//
// // Print the prototype of object
// // console.log(jonas.__proto__);
// // console.log(jonas.__proto__ === Person.prototype);
//
// // console.log(Person.prototype.isPrototypeOf(jonas));
// // console.log(Person.prototype.isPrototypeOf(matilda));
// // console.log(Person.prototype.isPrototypeOf(Person));
//
//
// Person.prototype.species = 'Homo Sapiens';
//
// // Static method on constructor object
// Person.hey = function() {
// 	console.log('Hi there!');
// };
//
// console.log('---- Static Method Constructor function ----');
// Person.hey();
//
// // jonas.hey(); // Not working
//
// // class expression
// // const PersonCl = class {
// //
// // };
//
//
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
// // class Declaration
// class PersonCl {
// 	constructor(fullName, birthYear) {
// 		this.fullName = fullName;
// 		this.birthYear = birthYear;
//
// 		this.doSomething = function() {
// 			console.log('doSomething');
// 		};
// 	}
//
// 	// Instance method
// 	// Methods will be added to .prototype property
// 	calcAge() {
// 		console.log(2037 - this.birthYear);
// 	}
//
// 	get age() {
// 		return 2037 - this.birthYear;
// 	}
//
// 	// Set a property that already exists
// 	set fullName(name) {
// 		console.log(name);
// 		if (name.includes(' ')) this._fullName = name;
// 		else alert('`${name}` is not a full name!');
// 	}
//
// 	get fullName() {
// 		return this._fullName;
// 	}
//
// 	// Static method 
// 	static hey() {
// 		console.log('--- hey in PersonCl ----');
// 		console.log(this);
// 	}
//
// }
//
// const jessica = new PersonCl('Jessica David', 1870);
// console.log(jessica);
//
//
// console.log('---- Getter ----');
// console.log(jessica.fullName);
//
// // console.log(Number.parseFloat('1.2'));
// // Number(3).parseFloat();
//
// PersonCl.hey();
//
// // jessica.hey(); // Not working
//
//
//
//
//
// // Using object using Object.create
// const PersonProto = {
// 	calcAge() {
// 		console.log(2037 - this.birthYear);
// 	},
//
// 	// Constructor 
// 	init(firstName, birthYear) {
// 		this.firstName = firstName;
// 		this.birthYear = birthYear;
// 	}
// };
//
//
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2001;
// steven.calcAge();
//
//
// console.log(steven.__proto__ === PersonProto);
//
// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 2000);
// sarah.calcAge();
// console.log(sarah);

// Inheritance: Constructor function
// const Person = function(firstName, birthYear) {
// 	this.firstName = firstName;
// 	this.birthYear = birthYear;
// };
//
// Person.prototype.calcAge = function() {
// 	console.log(2037 - this.birthYear);
// };
//
//
// const Student = function(firstName, birthYear, course) {
// 	Person.call(this, firstName, birthYear);
// 	// Person(firstName, birthYear);
// 	this.course = course;
// };
//
//
//
//
//
//
// // Chaining prototype in constructor object
// // Student.prototype.__proto__ = Person.prototype;
//
// Student.prototype = Object.create(Person.prototype);
//
// Student.prototype.introduce = function() {
// 	console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
//
//
// const mike = new Student('Mike', 2001, 'Java');
//
// console.log('---- After chaining -----');
// console.log(mike);
// mike.introduce();
// console.log('Call calcAge function in Student\' objects');
// mike.calcAge();
//
//
// console.log('---- Student.prototype.constructor ----');
// console.dir(Student.prototype.constructor);
//
// Student.prototype.constructor = Student;
// console.log('---- Student.prototype.constructor ----');
// console.dir(Student.prototype.constructor);
//
// console.log(mike instanceof Person);
// console.log(mike instanceof Student);



// class PersonCl {
// 	constructor(fullName, birthYear) {
// 		this.fullName = fullName;
// 		this.birthYear = birthYear;
//
// 		this.doSomething = function() {
// 			console.log('doSomething');
// 		};
// 	}
//
// 	// Instance method
// 	// Methods will be added to .prototype property
// 	calcAge() {
// 		console.log(2037 - this.birthYear);
// 	}
//
// 	get age() {
// 		return 2037 - this.birthYear;
// 	}
//
// 	// Set a property that already exists
// 	set fullName(name) {
// 		console.log(name);
// 		if (name.includes(' ')) this._fullName = name;
// 		else alert('`${name}` is not a full name!');
// 	}
//
// 	get fullName() {
// 		return this._fullName;
// 	}
//
// 	// Static method 
// 	static hey() {
// 		console.log('--- hey in PersonCl ----');
// 		console.log(this);
// 	}
//
// }
//
// class StudentCl extends PersonCl {
//
// 	constructor(fullName, birthYear, course) {
// 		// Always needs to happen first!
// 		super(fullName, birthYear);
// 		this.course = course;
// 	}
//
// 	introduce() {
// 		console.log(`My name is ${this.fullName} and I study ${this.course}`);
// 	}
//
// 	calcAge() {
// 		console.log(`I'm ${2037 - this.birthYear} years old.`);
// 	}
// }
//
// // const martha = new StudentCl('Martha Jones', 2012);
// const martha = new StudentCl('Martha Jones', 2001, 'Java');
//
// console.log(martha);
//
// martha.introduce();
//
// martha.calcAge();
//
//
// // Inheritance between classes using Object.create()
// const PersonProto = {
// 	calcAge() {
// 		console.log(2037 - this.birthYear);
// 	},
//
// 	init(firstName, birthYear) {
// 		this.firstName = firstName;
// 		this.birthYear = birthYear;
// 	},
//
// };
//
//
//
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function(firstName, birthYear, course) {
// 	PersonProto.init.bind(this, firstName, birthYear)();
// 	this.course = course;
// };
//
// StudentProto.introduce = function() {
// 	console.log('hello world');
// };
//
// // const testStudentProtoObj = StudentProto.init('Phuong', 2001, 'JS');
// console.log('---- testStudentProtoObj ----');
// // console.log(StudentProto);
// // console.log(testStudentProtoObj);
// const jay = Object.create(StudentProto);
//
// jay.init('Phuong', 2001, 'JS');
// console.log(jay);
// jay.introduce();
// jay.calcAge();



class Account {
	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		this.pin = pin;
		this.movements = [];
		this.locale = navigator.language;

		console.log(`Thanks for opening an accout, ${owner}`);
	}

	// Public interface
	deposit(val) {
		this.movements.push(val);
	}

	withdraw(val) {
		this.deposit.call(this, -val);
	}
}

const acc1 = new Account('Phuong', 'VND', 1505);
console.log(acc1);
acc1.deposit(100);
acc1.withdraw(200);
console.log(acc1);
