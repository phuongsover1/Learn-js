'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

movements.map((mov, i, arr) => {
	mov > 0 ?
		console.log(`Movement ${i + 1}: You deposited ${mov}`)
		:
		console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
});
