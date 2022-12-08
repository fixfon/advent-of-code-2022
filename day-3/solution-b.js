const fs = require('fs');

let priority = 0;

fs.readFile('day-3/input.txt', 'utf8', (err, data) => {
	if (err) throw err;

	const lines = data.split('\n');

	// Capital Letter = 65,90 > 27,52 = -38
	// Lowercase Letter = 97,122 > 1,26 = -96

	const groupByThree = lines.reduce((acc, line, index) => {
		if (index % 3 === 0) {
			acc.push([line]);
		} else {
			acc[acc.length - 1].push(line);
		}
		return acc;
	}, []);

	groupByThree.forEach((group) => {
		const uniqueCharOnFirst = [...new Set(group[0])];

		uniqueCharOnFirst.forEach((char) => {
			if (group[1].includes(char) && group[2].includes(char)) {
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
