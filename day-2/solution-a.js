const fs = require('fs');

const initialRock = 'A';
const initialPaper = 'B';
const initialSci = 'C';
const alteredRock = 'X';
const alteredPaper = 'Y';
const alteredSci = 'Z';

const loseScore = 0;
const drawScore = 3;
const winScore = 6;
const rockScore = 1;
const paperScore = 2;
const sciScore = 3;

let playerScore = 0;

const winMove = (move) => {
	switch (move) {
		case initialRock:
			return alteredPaper;
		case initialPaper:
			return alteredSci;
		case initialSci:
			return alteredRock;
		default:
			return null;
	}
};

const findDraw = (opponent, player) => {
	switch (opponent) {
		case initialRock:
			return player === alteredRock ? drawScore : loseScore;
		case initialPaper:
			return player === alteredPaper ? drawScore : loseScore;
		case initialSci:
			return player === alteredSci ? drawScore : loseScore;
		default:
			return null;
	}
};

const calculateShapeScore = (move) => {
	switch (move) {
		case alteredRock:
			return rockScore;
		case alteredPaper:
			return paperScore;
		case alteredSci:
			return sciScore;
		default:
			return null;
	}
};

const calculateScore = (opponent, player) => {
	const shapeScore = calculateShapeScore(player);
	const requiredMove = winMove(opponent);

	if (requiredMove === player) {
		const finalScore = shapeScore + winScore;
		return (playerScore += finalScore);
	} else {
		const roundScore = findDraw(opponent, player);
		const finalScore = shapeScore + roundScore;
		return (playerScore += finalScore);
	}
};

fs.readFile('day-2/input.txt', 'utf8', (err, data) => {
	if (err) throw err;

	const input = data.split(/\r?\n/);

	input.forEach((round) => {
		const [opponent, player] = round.split(' ');
		calculateScore(opponent, player);
	});

	console.log(playerScore);
});
