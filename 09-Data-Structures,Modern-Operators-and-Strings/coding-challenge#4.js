'use strict';

/*
	Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

	THIS TEST DATA 
	underscore_case 
	 first_name
	Some_Variable 
		calculate_AGE
	delayed_depature

	SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
	underscoreCase 
	firstName 
	someVariable 
	calculateAge 
	delayedDepature 

*/
function underToCamelCase(...variables) {
	for (const [index, variable] of variables.entries()) {
		const words = variable.trim().toLowerCase().split('_'); // ['some'] , ['some','name']
		let resultVar = '';
		for (const [index, word] of words.entries()) {
			if (index > 0) {
				const capitalWord = word[0].toUpperCase() + word.slice(1);
				resultVar += capitalWord;
				continue;
			}
			resultVar += word;
		}
		console.log(`${resultVar.padEnd(20, ' ')} ${'v '.repeat(index + 1)}`);
	}
}

underToCamelCase('underscore_case_fSfd_sdj', ' first_name', 'Some_Variable', '  calculate_AGE', 'delayed_departure', 'some', 'SO_ME');
