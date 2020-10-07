const express = require('express');
const app = express();
const gameData = require('./data/games.json')

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {gameData});
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});