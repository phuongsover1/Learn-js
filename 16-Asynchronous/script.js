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
// Refactor 
const getJSON = function(url, errorMsg = 'Something went wrong!') {
	return fetch(url)
		.then(response => {
			if (!response.ok)
				throw new Error(`${errorMsg}. ${response.status}`);
			return response.json();
		});
};
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

	// 	fetch(`https://restcountries.com/v3.1/name/${country}`)
	// 		.then(response => {
	// 			console.log(response);
	//
	// 			// imediately rejecting promise if the country not found.
	// 			if (!response.ok) {
	// 				throw new Error(`Country not found. ${response.status}`);
	// 			}
	// 			return response.json();
	// 		})
	// 		.then(data => {
	// 			renderData(data[0]);
	//
	// 			const neighbour = data[0]?.borders?.at(1);
	// 			// const neighbour = 'dssdsdsd';
	// 			if (!neighbour) return;
	//
	// 			return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
	// 		})
	// 		.then(response => {
	//
	// 			// imediately rejecting promise if the country not found.
	// 			if (!response.ok) {
	// 				throw new Error(`Country not found. ${response.status}`);
	// 			}
	//
	// 			return response.json();
	// 		})
	// 		.then(data => renderData(data[0], 'neighbour'))
	// 		.catch(error => alert(`Some thing went wrong. ${error}`))
	// 		.finally(() => countriesContainer.style.opacity = 1);
	// };




	getJSON(`https://restcountries.com/v3.1/name/${country}`)
		.then(data => {
			renderData(data[0]);

			const neighbour = data[0].borders?.at(1);
			if (!neighbour)
				throw new Error('Neighbour not found.');

			return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`);
		})
		.then(data => renderData(data[0], 'neighbour'))
		.catch(error => alert(error))
		.finally(() => countriesContainer.style.opacity = 1);

};
btn.addEventListener('click', () => {
	getCountryData('vietnam');
});

// Event loops
// console.log('Test start');
// setTimeout(() => {
// 	console.log('0 sec timer');
// }, 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
//
// Promise.resolve('Resolved promise 2').then(res => {
// 	for (let i = 0; i < 1000000000; i++) {
// 	}
// 	console.log(res);
// });
//
// console.log('Test end');

// const lottery = new Promise(function(resolve, reject) {
// 	if (Math.random() >= 0.5)
// 		resolve('You WIN');
// 	else
// 		reject(new Error('You lost your money'));
// });
//
// lottery.then(res => console.log(res))
// 	.catch(error => console.error(error));
//

const getPosition = () => {
	return new Promise((resolve, reject) => {
		/* 
			navigator.geolocation.getCurrentPosition(
				position => resolve(position),
				err => reject(err)
			)
			* */
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
};

getPosition().then(pos => console.log(pos));

