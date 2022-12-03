const fs = require('fs');

const initialRock = 'A';
const initialPaper = 'B';
const initialSci = 'C';

const lose = 'X';
const draw = 'Y';
const win = 'Z';

const loseScore = 0;
const drawScore = 3;
const winScore = 6;
const rockScore = 1;
const paperScore = 2;
const sciScore = 3;

let playerScore = 0;

const calculateShapeScore = (move, result) => {
	switch (move) {
		case initialRock:
			return result === lose
				? sciScore
				: result === draw
				? rockScore
				: paperScore;
		case initialPaper:
			return result === lose
				? rockScore
				: result === draw
				? paperScore
				: sciScore;
		case initialSci:
			return result === lose
				? paperScore
				: result === draw
				? sciScore
				: rockScore;
		default:
			return null;
	}
};

const calculateScore = (opponent, result) => {
	let shapeScore = 0;
	let score = 0;
	switch (result) {
		case lose:
			shapeScore = calculateShapeScore(opponent, lose);
			score = loseScore + shapeScore;
			break;
		case draw:
			shapeScore = calculateShapeScore(opponent, draw);
			score = drawScore + shapeScore;
			break;
		case win:
			shapeScore = calculateShapeScore(opponent, win);
			score = winScore + shapeScore;
			break;
		default:
			break;
	}

	return (playerScore += score);
};

fs.readFile('day-2/input.txt', 'utf8', (err, data) => {
	if (err) throw err;

	const input = data.split(/\r?\n/);

	input.forEach((round) => {
		const [opponent, result] = round.split(' ');
		calculateScore(opponent, result);
	});

	console.log(playerScore);
});
