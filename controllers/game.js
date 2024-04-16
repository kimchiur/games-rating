const fs = require('fs');
const { config } = require('../appModules/rating');
const { getRandomGame } = require('../appModules/api');

async function gameRouteController(res) {
	fs.readFile(config.PATH_TO_RATING_FILE, (err, ratingFile) => {
		if (err) {
			res.statusCode = 500;
			res.end('Internal Server Error');
		}
		const data = JSON.parse(ratingFile);
		const game = getRandomGame(data); // Получаем случайную игру
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(game));
	});
}
module.exports = gameRouteController;
