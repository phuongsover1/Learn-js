'use strict';

/*
	
	Let's go back to Julia and Kate's study about dogs.
	This time, they want to convert dog ages to human ages 
	and calculate the average age of the dogs in their study. 

	Create a function 'calcAverageHumanAge', which accepts an 
	arrays of dog's ages ('ages'), and does the following things in order: 

	1. Calculate the dog age in human years using the following fomula: 
	- If the dog is <= 2 years old, humanAge = 2 * dogAge.
	- If the dog is > 2 years old, humanAge = 16 + dogAge * 4. 

	2. Exclude all dogs that are less than 18 human years old 
	(which is the same as keeping dogs that are at least 18 years old )
	
	3.Calculate the average human age of all adult dogs 
	(you should already know from other challenges how we calculate averages) 

	4. Run the function for both test datasets 

	TEST DATA 1: [5,2,4,1,15,8,3]
	TEST DATA 2: [16,6,10,5,6,1,4]
	* */

const calcAverageHumanAge = function(ages) {
	const dogAgeInHumanYears = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);

	const adultDogs = dogAgeInHumanYears.filter(age => age >= 18);

	// const sumOfAge = adultDogs.reduce((acc, cur) => acc + cur);
	// const average = sumOfAge / adultDogs.length;

	// Another solution 
	// (2+3)/2 = 2.5 === 2/2 + 3/2 = 2.5
	const average = adultDogs.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
	return average;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
