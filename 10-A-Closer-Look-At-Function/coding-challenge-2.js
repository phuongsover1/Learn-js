'use strict';

/*
	This is more of a thinking challenge than a coding challenge

	Take the IIFE below and at the end of the function,
	attach an envent listener that changes the color of the 
	selected h1 element("header") to blue, each time the BODY
	element is clicked. Do NOT select the h1 element again ! 

	
	*/

// (function() {
// 	const header = document.querySelector('h1');
// 	header.style.color = 'red';
// })();

// Solution: 
const changeBGToBlue = (function() {
	const header = document.querySelector('h1');
	header.style.color = 'red';

	return () => header.style.color = 'blue';
})();

const body = document.querySelector('body');
body.addEventListener('click', changeBGToBlue);


