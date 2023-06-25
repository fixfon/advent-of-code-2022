const fs = require('fs');

let initialCreates = {};
let movements = [];

function readFiles() {
	return new Promise((resolve, reject) => {
		fs.readFile('input-2.txt', 'utf8', (err, data) => {
			if (err) {
				reject(err);
				throw err;
			}

			const lines = data.split('\r\n');

			lines.forEach((line) => {
				// get three indexes of the line and use 4th ' ' as seperator. Recurring
				let lineIndex = 0;
				let columnCount = line.length + 1 / 4;

				for (let i = 0; i < columnCount; i++) {
					const create = line.substring(lineIndex, lineIndex + 3);

					if (create.startsWith('[')) {
						initialCreates[i + 1] === undefined
							? (initialCreates[i + 1] = [])
							: null;
						initialCreates[i + 1].push(create);
					}
					lineIndex += 4;
				}
			});

			// upside down every stack

			const columnCount = Object.keys(initialCreates).length;

			for (let i = 1; i <= columnCount; i++) {
				initialCreates[i] = initialCreates[i].reverse();
			}

			resolve();
		});
	}).then(() => {
		return new Promise((resolve, reject) => {
			fs.readFile('input.txt', 'utf8', (err, data) => {
				if (err) {
					reject(err);
					throw err;
				}

				const lines = data.split('\r\n');

				lines.forEach((line) => {
					try {
						const lineArr = line.split(' ');

						const createCount = lineArr[1];
						const fromCreate = lineArr[3];
						const toCreate = lineArr[5];

						const movement = [createCount, fromCreate, toCreate];

						movements.push(movement);
					} catch (error) {
						throw error;
					}
				});

				resolve();
			});
		});
	});
}

function doMovements() {
	movements.forEach((movement, index) => {
		const createCount = movement[0];
		const fromCreate = movement[1];
		const toCreate = movement[2];

		const _createCount = parseInt(createCount);

		const fromCreateStack = initialCreates[fromCreate];
		const fromCreateStackLength = fromCreateStack.length;

		if (fromCreateStackLength === 0) return;
		if (fromCreateStackLength < _createCount) return;

		const spliced = initialCreates[fromCreate].splice(
			initialCreates[fromCreate].length - _createCount
		);
		initialCreates[toCreate] = initialCreates[toCreate].concat(
			spliced.reverse()
		);
	});
}

function getResult() {
	// get the last element of each stack

	const result = [];

	const columnCount = Object.keys(initialCreates).length;

	for (let i = 1; i <= columnCount; i++) {
		const create = initialCreates[i][initialCreates[i].length - 1];
		result.push(create);
	}
	console.log('result:', result);
	return result;
}

async function main() {
	await readFiles();
	doMovements();
	getResult();
}

main();
