const fs = require('fs');

let priority = 0;

fs.readFile('day-3/input.txt', 'utf8', (err, data) => {
	if (err) throw err;

	const lines = data.split('\n');

	// Capital Letter = 65,90 > 27,52 = -38
	// Lowercase Letter = 97,122 > 1,26 = -96

	lines.forEach((line) => {
		const firstHalf = line.slice(0, line.length / 2);
		const secondHalf = line.slice(line.length / 2);

		uniqueChars = [...new Set(firstHalf)];

		uniqueChars.forEach((char) => {
			if (secondHalf.includes(char)) {
				if (char.charCodeAt(0) < 91) {
					const res = char.charCodeAt(0) - 38;
					priority += res;
				} else {
					const res = char.charCodeAt(0) - 96;
					priority += res;
				}
			}
		});
	});

	console.log(priority);
});
