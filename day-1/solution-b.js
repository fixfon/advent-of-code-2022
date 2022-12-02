const fs = require('fs');

let lines = [[]];
let sumArr = [];

fs.readFile('day-1/input.txt', 'utf8', (err, data) => {
	if (err) throw err;

	const inputArr = data.split('\n').map(Number);

	inputArr.forEach((num) => {
		if (num === 0) {
			lines.push([]);
		} else {
			lines[lines.length - 1].push(num);
		}
	});

	lines.map((line) => {
		const sum = line.reduce((acc, num) => {
			return acc + num;
		}, 0);

		sumArr.push(sum);
	});

	sumArr.sort((a, b) => b - a);

	const topThree = sumArr.slice(0, 3);

	const topThreeSum = topThree.reduce((acc, num) => {
		return acc + num;
	}, 0);

	console.log(topThreeSum);
});
