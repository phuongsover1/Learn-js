'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountrydata = function(name) {


	const request = new XMLHttpRequest();
	request.open('GET', `https://restcountries.com/v3.1/name/${name}`);

	request.send();
	request.responseText;

	request.addEventListener('load', function() {
		// console.log(this.responseText);
		const [data] = JSON.parse(request.responseText);
		console.log(data);

		const html = `
        <article class="country">
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
	});
};

getCountrydata('vietnam');
getCountrydata('japan');
getCountrydata('chn');
