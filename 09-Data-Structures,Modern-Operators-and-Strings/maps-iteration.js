'use strict';


const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
	[weekdays[3]]: {
		open: 12,
		close: 22,
	},
	[weekdays[4]]: {
		open: 11,
		close: 23,
	},
	[weekdays[5]]: {
		open: 0, // Open 24 hours
		close: 24,
	}
};

console.log(Object.entries(openingHours));

const question = new Map([
	['question', 'What is the best programing language in the world?'],
	[1, 'C'],
	[2, 'Java'],
	[3, 'JavaScript'],
	['correct', 3],
	[true, 'Correct!'],
	[false, 'Try again!'],
]); // Same format with Object.entries(openingHours)

console.log(question);

// ==> Convert object to map 
console.log('---- Converting Object to Map ----');
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

// Looping through a map 
// Quiz app
const readline = require('readline-sync');
console.log(question.get('question'));
for (const [key, value] of question) {
	if (typeof key === 'number') {
		console.log(`Answer ${key}: ${value}`);
	}
}

const answer = readline.questionInt('Your answer? ');
console.log(`${question.get(answer === 3)}`);


// Convert map to array 
console.log([...question]);

// Get array of keys, values of a map 
console.log(question.keys());
console.log([...question.keys()]);


console.log(question.values());
console.log([...question.values()]);
