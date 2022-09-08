'use strict';


const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.append(message);

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.backgroundColor);


console.log('---- Color ----');
console.log(message.style.color);

console.log('---- Computed style ----');
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);

console.log('---- HEIGHT ----');
console.log(getComputedStyle(message).height);



// message.style.height = getComputedStyle(message).height + 40 + 'px'; // '50px40px'
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 200 + 'px';

console.log(message.style.height);



document.documentElement.style.setProperty('--color-primary', 'orangered');


// Attributes
console.log('---- Attributes ----');
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);

// Non-standard
console.log(logo.designer);

console.log(logo.getAttribute('designer'));

console.log('---- className ----');
console.log(logo.className);

// Setting standard-attributes
logo.alt = 'Beautiful minimalist logo';

// Setting Non-standard Attributes
logo.setAttribute('company', 'Banklikst');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');

console.log('---- HREF ----');
console.log(link.href);
console.log(link.getAttribute('href'));


// Data attributes
console.log('---- DATASET ----');
console.log(logo.dataset.versionNumber);

// Classes 
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');


// Don't use because it overides all the existing class
// logo.className = 'jonas';
