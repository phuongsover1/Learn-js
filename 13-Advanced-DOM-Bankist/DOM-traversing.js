'use strict';

const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));

console.log('---- h1.childNodes ----');
console.log(h1.childNodes);

console.log('---- h1.children ----');
console.log(h1.children);

// first and last element child
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log('--- Going Upwards ----');
console.log(h1.parentNode);

console.log('---- Closest ----');
console.log(h1.closest('.header'));
h1.closest('.header').style.background = 'var(--gradient-secondary)';


console.log(h1.closest('h1'));

// Going sideways: siblings
console.log('---- Going sideways: siblings ----');
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// getting all the siblings 
console.log(' --- get all the siblings ----');
console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(el => {
	if (el !== h1) el.style.transform = 'scale(0.5)';
});

