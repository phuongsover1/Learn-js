'use strict';

// Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const allSections = document.querySelectorAll('.section');

console.log(allSections);

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// Return HTML Collection
console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML
const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);

// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);


// Delete Elements
document.querySelector('.btn--close-cookie')
	.addEventListener('click', function(e) {
		message.remove();
		// message.parentElement.removeChild(message);
	});

console.log('---- message ----');
console.log(message);
