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

// 1.Create one player array for each team( variables 'players1' and 'players2' )
const [players1, players2] = [...game.players];
console.log('---- Q1 ----');
console.log('players1: ' + players1);
console.log('players2: ' + players2);

// 2.The first player in any player array is the goalkeeper and the others are field players.
// For Bayern Munich (team1) create one variable ('gk') with the goalkeeper's name,
// and one array ('fieldPlayers') with all the remaining 10 field players.
const [gk, ...fieldPlayers] = game.players[0];
console.log('---- Q2 ----');
console.log(gk);
console.log(fieldPlayers);


// 3. Create an array 'allPlayers' containing all players of both teams( 22 players )
const allPlayers = [...game.players[0], ...game.players[1]];
console.log('---- Q3 ----');
console.log(allPlayers);



// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('playersFinal') containing all the original team1 players plus 'Thiago','Coutinho','Perisic'
console.log('---- Q4 ----');
const playersFinal = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
console.log(playersFinal);



// 5.Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
console.log('---- Q5 ----');
const { team1, x: draw, team2 } = game.odds;
console.log(team1);
console.log(draw);
console.log(team2);




// 6. Write a function('printGoals') that receives an arbitrary number of player names (NOT an array) 
// and prints each of them to the console,
// along with the number of goals who were scored  in total (number of player names passed in)
console.log('---- Q6 ----');
function printGoals(...playerNames) {
	// filter playerNames so that it's member is unique in list
	const uniqueName = [];
	playerNames.forEach(name => {
		uniqueName.indexOf(name) == -1 && uniqueName.push(name);
	});

	const result = uniqueName.map(playerName => {
		const player = {
			name: playerName,
		};

		const goals = game.scored.reduce((initialGoals, playerName) =>
			playerName === player.name ? initialGoals + 1 : initialGoals, 0);

		player.goals = goals;

		return player;
	});

	result.forEach(player => {
		console.log(`playerName: ${player.name}, goals: ${player.goals}`);
	});
}

printGoals('Lewandowski', 'Gnarby', 'Gotze');
printGoals(...game.scored);



// 7.The team with the lower odd is more likely to win.
// Print to the console which team is more likely to
// win , WITHOUT using an if/else statement or the ternary operator.
console.log('---- Q7 ----');
game.odds.team1 < game.odds.team2 && console.log('team1 win');

game.odds.team2 < game.odds.team1 && console.log('team2 win');
