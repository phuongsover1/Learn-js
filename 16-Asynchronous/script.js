'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderData = function(data, className = '') {

	const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
            <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
          </div>
        </article>
	`;

	countriesContainer.insertAdjacentHTML('beforeend', html);
	countriesContainer.style.opacity = 1;
};
// const getCountryAndNeighbour = function(country) {
// 	// AJAX call country 1
// 	const request = new XMLHttpRequest();
// 	request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//
// 	request.send();
//
// 	request.addEventListener('load', function() {
// 		// console.log(this.responseText);
// 		const [data] = JSON.parse(request.responseText);
// 		console.log(data);
//
// 		// Render country 1
// 		renderData(data);
//
// 		// Get neighbour country (2)
// 		const [neighbour] = data.borders;
//
// 		if (!neighbour) return;
//
// 		// AJAX call country 2
// 		const request2 = new XMLHttpRequest();
// 		request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//
// 		request2.send();
//
// 		request2.addEventListener('load', function() {
// 			const [data] = JSON.parse(request2.responseText);
//
// 			// Render neighbour country
// 			renderData(data, 'neighbour');
// 		});
//
// 	});
// };
// // const getCountrydata = function(name) {
// //
// //
// // 	const request = new XMLHttpRequest();
// // 	request.open('GET', `https://restcountries.com/v3.1/name/${name}`);
// //
// // 	request.send();
// // 	request.responseText;
// //
// // 	request.addEventListener('load', function() {
// // 		// console.log(this.responseText);
// // 		const [data] = JSON.parse(request.responseText);
// // 		console.log(data);
// //
// // 		const html = `
// //         <article class="country">
// //           <img class="country__img" src="${data.flags.svg}" />
// //           <div class="country__data">
// //             <h3 class="country__name">${data.name.common}</h3>
// //             <h4 class="country__region">${data.region}</h4>
// //             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
// //             <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
// //             <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
// //           </div>
// //         </article>
// // 	`;
// //
// // 		countriesContainer.insertAdjacentHTML('beforeend', html);
// // 		countriesContainer.style.opacity = 1;
// // 	});
// // };
//
// getCountryAndNeighbour('vietnam');
//
//
// // Another example of callback hell
// setTimeout(() => {
// 	console.log('1 second passed');
// 	setTimeout(() => {
// 		console.log('2 second passed');
// 		setTimeout(() => {
// 			console.log('3 second passed');
// 			setTimeout(() => {
// 				console.log('4 second passed');
// 			}, 1000);
// 		}, 1000);
// 	}, 1000);
// }, 1000);


// Learning Promises
// const request = fetch('https://restcountries.com/v3.1/name/vietnam');
// console.log(request);
const getCountryData = function(country) {
	// fetch(`https://restcountries.com/v3.1/name/${country}`)
	// 	.then(function(response) {
	// 		console.log(response);
	// 		return response.json();
	// 	})
	// 	.then(function(data) {
	// 		console.log(data);
	//
	// 		renderData(data[0]);
	// 	});

	// fetch(`https://restcountries.com/v3.1/name/${country}`)
	// 	.then(response => response.json())
	// 	.then(data => renderData(data[0]));

	fetch(`https://restcountries.com/v3.1/name/${country}`)
		.then(response => response.json())
		.then(data => {
			renderData(data[0]);

			const neighbour = data[0].borders[1];
			if (!neighbour) return;

			return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
		})
		.then(response => response.json())
		.then(data => renderData(data[0], 'neighbour'));
};

getCountryData('japan');
