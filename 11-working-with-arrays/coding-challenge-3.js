'use strict';

/* 
	Rewrite the 'calcAverageHumanAge' function from the previous challenge,
	but this time as an arrow function, and using chaining !
	* */

//	TEST DATA 1: [5,2,4,1,15,8,3]
//	TEST DATA 2: [16,6,10,5,6,1,4]
const calcAverageHumanAge = function(ages) {
	const average = ages
		.map(age => age <= 2 ? 2 * age : 16 + age * 4)
		.filter(age => age >= 18)
		.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

	return average;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
