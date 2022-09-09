'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
// Implement smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

const nav = document.querySelector('.nav');

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

// Page Navigation
// document.querySelectorAll('.nav__link').forEach(function(el) {
// 	el.addEventListener('click', function(e) {
// 		e.preventDefault();
// 		const id = this.getAttribute('href'); // Để lấy relative(#section--1) thay vì absolute path : 127.0.0.1:8888/#section--1 
// 		console.log(id); // #section--1
// 		document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
// 	});
// });

// Using event delegation
document.querySelector('.nav__links').addEventListener('click',
	function(e) {
		e.preventDefault();

		// Matching strategy 
		if (e.target.classList.contains('nav__link')) {
			const id = e.target.getAttribute('href');
			console.log(id);
			document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
		}
	});

// Tabbed component

tabsContainer.addEventListener('click', function(e) {
	e.preventDefault();

	const clicked = e.target.closest('.operations__tab');

	if (!clicked) return;

	tabs.forEach(tab => tab.classList.remove('operations__tab--active'));

	clicked.classList.add('operations__tab--active');

	// Active content area 
	tabsContent.forEach(tab => tab.classList.remove('operations__content--active'));

	document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

// Menu fade animation 
// Refactoring 
const handleHover = function(e, opacity) {

	const link = e.target;
	const siblings = link.closest('.nav').querySelectorAll('.nav__link');
	const logo = link.closest('.nav').querySelector('img');

	siblings.forEach(el => {
		if (el !== link) el.style.opacity = opacity;
	});

	logo.style.opacity = opacity;
};

nav.addEventListener('mouseover', function(e) {
	if (e.target.classList.contains('nav__link')) {
		handleHover(e, 0.5);
	}
});

nav.addEventListener('mouseout', function(e) {
	handleHover(e, 1);
});
