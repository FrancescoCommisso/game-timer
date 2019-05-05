const Game = require("./game.js");
const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(pino);

var games = {};

app.post("/api/addgame", (req, res) => {
  var g = new Game(req.body);
  g.init();
  games[g.id] = g;
  res.send();
});

app.post("/api/remainingtime", (req, res) => {
  res.send(JSON.stringify(games[req.body.id].gameState));
});

app.get("/api/games", (req, res) => {
  res.send(games);
});

app.post("/api/game", (req, res) => {
  res.send(JSON.stringify(games[req.body.id]));
});

app.post("/api/input/endturn", (req, res) => {
  games[req.body.id].endTurn();
  res.send(JSON.stringify(games[req.body.id]));
});
app.post("/api/input/pause", (req, res) => {
  games[req.body.id].pauseTurn();
  res.send(JSON.stringify(games[req.body.id]));
});
app.post("/api/input/restart", (req, res) => {
  games[req.body.id].restartTurn();
  res.send(JSON.stringify(games[req.body.id]));
});
app.post("/api/getstate", (req, res) => {
  res.send(JSON.stringify(games[req.body.id]));
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
