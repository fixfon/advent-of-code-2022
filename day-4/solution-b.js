const fs = require('fs');

let sum = 0;

fs.readFile('day-4/input.txt', 'utf8', (err, data) => {
	if (err) throw err;
	const lines = data.split('\n');

	lines.forEach((section) => {
		// 5-7,7-9 overlaps in a single section, 7.
		// 2-8,3-7 overlaps all of the sections 3 through 7.
		// 6-6,4-6 overlaps in a single section, 6.
		// 2-6,4-8 overlaps in sections 4, 5, and 6.

		const [firstElf, secondElf] = section.split(',');

		const [firstStart, firstEnd] = firstElf.split('-').map((x) => parseInt(x));
		const [secondStart, secondEnd] = secondElf
			.split('-')
			.map((x) => parseInt(x));

		if (firstEnd <= secondEnd && firstEnd >= secondStart) {
			sum += 1;
		} else if (firstStart <= secondEnd && firstStart >= secondStart) {
			sum += 1;
		} else if (secondEnd <= firstEnd && secondEnd >= firstStart) {
			sum += 1;
		} else if (secondStart <= firstEnd && secondStart >= firstStart) {
			sum += 1;
		}
	});
	console.log(sum);
});
