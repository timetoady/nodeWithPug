const express = require('express');
const app = express();
const gameData = require('./data/games.json')
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {gameData});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});