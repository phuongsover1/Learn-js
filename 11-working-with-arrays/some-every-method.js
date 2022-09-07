'use strict';


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// EQUALITY 
console.log(movements.includes(-150));

// Some: Condition
console.log(movements.some(mov => mov > 150));


// EVERY 
console.log(movements.every(mov => mov > 0));

console.log(movements.every(mov => mov < 50000));

