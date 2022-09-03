'use strict';

const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
		[
			'Neuer',
			'Pavard',
			'Martinez',
			'Alaba',
			'Davies',
			'Kimmich',
			'Goretzka',
			'Coman',
			'Muller',
			'Gnarby',
			'Lewandowski'
		],
		[
			'Burki',
			'Schulz',
			'Hummels',
			'Akanji',
			'Hakimi',
			'Weigl',
			'Witsel',
			'Hazard',
			'Brandt',
			'Sancho',
			'Gotze'
		]
	],
	score: '4:0',
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
	date: 'Nov 9th, 2037',
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5
	}
};

// 1.Loop over the game.scored array and print each player name to the console, along with the goal number {Example: Goal 1: Lewandowski}
console.log('---- Q1 ----');
if (game.scored[0])
	for (const [goalNumber, name] of game.scored.entries())
		console.log(`Goal ${goalNumber + 1}: ${name}`);
else
	console.log('game.scored is empty');



// 2.Use a loop to calculate the average odd and log it to the console
console.log('---- Q2 ----');
if (game.odds) {
	const total = Object.keys(game.odds).length;
	const sum = Object.values(game.odds).reduce((num1, num2) => parseFloat(num1) + parseFloat(num2));
	console.log('average is: ', sum / total);
}


// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
//     Odd of victory Bayenrn Munich : 1.33
//     Odd of draw: 3.25 
//     Odd of victory Borrussia Dortmund: 6.5
console.log('---- Q3 ----');

for (const [key, value] of Object.entries(game.odds)) {
	const teamStr = `Odd of ${key === 'x' ? 'draw' : 'victory ' + game[key]}: ${value}`;
	console.log(teamStr);
}






// BONUS Create an object called 'scorers' which contains the names of the players who scored as properties,
// and the number of goals as the value. In this game, it will look like this: 
//     {
//     Gnarby: 1,
//     Hummels: 1,
//     Lewandowski: 2 
//     }
console.log('---- BONUS ----');
const unique = [];
for (const item of game.scored)
	unique.indexOf(item) === -1 && unique.push(item);

const scorers = {};
for (const name of unique) {
	const goalOfPlayer = game.scored.reduce((initialGoal, player) =>
		player === name ? initialGoal + 1 : initialGoal, 0);

	scorers[name] = goalOfPlayer;
}
console.log(scorers);
