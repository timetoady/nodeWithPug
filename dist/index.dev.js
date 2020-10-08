"use strict";

var express = require('express');

var app = express();

var gameData = require('./data/games.json');

var port = process.env.PORT;

if (port == null || port == "") {
  port = 8000;
}

app.set('view engine', 'pug');
app.get('/', function (req, res) {
  res.render('index', {
    gameData: gameData
  });
});
app.listen(port, function () {
  console.log("Listening on port ".concat(port, "..."));
});