const fs = require('fs');

let sum = 0;

fs.readFile('day-4/input.txt', 'utf8', (err, data) => {
	if (err) throw err;
	const lines = data.split('\n');

	lines.forEach((section) => {
		// 5-17,4-67
		const [firstElf, secondElf] = section.split(',');

		const [firstStart, firstEnd] = firstElf.split('-').map((x) => parseInt(x));
		const [secondStart, secondEnd] = secondElf
			.split('-')
			.map((x) => parseInt(x));

		if (firstEnd <= secondEnd && firstStart >= secondStart) {
			sum += 1;
		} else if (firstEnd >= secondEnd && firstStart <= secondStart) {
			sum += 1;
		}
	});
	console.log(sum);
});
