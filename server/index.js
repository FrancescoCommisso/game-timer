const Game = require("./game.js");
const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(pino);

var games = {};

app.get("/api/creategame", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  var game = new Game();
  res.send(JSON.stringify(game));
});

app.post("/api/addgame", (req, res) => {
  games[req.body.id] = req.body;
  res.send();
});

app.post("/api/addplayers", (req, res) => {
  games[req.body.id].players = req.body.players;

  res.send();
});

app.post("/api/addsettings", (req, res) => {
  games[req.body.id].settings = req.body.settings;
  res.send();
  console.log("game: " + JSON.stringify(games[req.body.id]));
});

app.get("/api/games", (req, res) => {
  res.send(games);
});

app.post("/api/game", (req, res) => {
  console.log("RECIEVED THIS: " + JSON.stringify(req.body.id));
  console.log("SENDING THIS: " + JSON.stringify(games[req.body.id].gameState));
  res.send(JSON.stringify(games[req.body.id].gameState));
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
