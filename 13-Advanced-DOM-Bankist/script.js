'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function(e) {
	e.preventDefault();
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModal = function() {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});

// Implement smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {
	const s1coords = section1.getBoundingClientRect();
	console.log('---- s1coords ----');
	console.log(s1coords);

	console.log(e.target.getBoundingClientRect());

	console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

	console.log('height/width viewport',
		document.documentElement.clientHeight,
		document.documentElement.clientWidth);

	// Scrolling
	// window.scrollTo(s1coords.left + window.pageYOffset, s1coords.top + window.pageYOffset);

	// Applying smooth scrolling 
	// window.scrollTo({
	// 	left: s1coords.left + window.pageXOffset,
	// 	top: s1coords.top + window.pageYOffset,
	// 	behavior: 'smooth',
	// });


	// Only affecting in mordern browser
	section1.scrollIntoView({ behavior: 'smooth' });
});


// Some more events 

const h1 = document.querySelector('h1');

const alertH1 = function(e) {
	alert('addEventListener: Great! You are reading the heading :D');

	h1.removeEventListener('mouseenter', alertH1);
};


h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function(e) {
// 	alert('onmouseenter: Great! You are reading the heading :D');
// };



// Event Propagation
const randomInt = (min, max) =>
	Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function(e) {
	console.log('LINK', e.target, e.currentTarget);
	console.log(e.currentTarget === this);

	// Stop propagation
	// e.stopPropagation();
});


document.querySelector('.nav__links').addEventListener('click', function(e) {
	console.log('CONTAINER', e.target, e.currentTarget);
});


document.querySelector('.nav').addEventListener('click', function(e) {
	console.log('NAV', e.target, e.currentTarget);
}, true);
