const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, data) => {
	if (err) throw err;
	for (let i = 0; i < data.length; i++) {
		if (i < 3) continue;
		const fourStack = data.slice(i - 3, i + 1);
		if (
			!fourStack
				.split('')
				.some((char, index) => fourStack.indexOf(char) !== index)
		) {
			console.log(i + 1);
			break;
		}
	}
});
