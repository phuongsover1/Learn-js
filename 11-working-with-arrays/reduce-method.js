'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function(acc, cur, index, arr) {
	return acc + cur;
}, 0);


// Maximum value
const maximumValue = movements.reduce((acc, cur) => cur > acc ? cur : acc);

console.log(maximumValue);
