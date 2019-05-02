const Game = require("./game.js");
const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(pino);

var testplayers = ["francesco", "gio", "matteo", "alex"];

var games = [];

app.get("/api/creategame", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  var game = new Game();
  game.setPlayers(testplayers);
  res.send(JSON.stringify(game));
});

app.post("/api/addgame", (req, res) => {
  games.push(req.body);
  printGames();
  res.send();
});

app.get("/api/games", (req, res) => {
  res.send(games);
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);

function printGames() {
  games.forEach(game => {
    console.log(JSON.stringify(game));
  });
}
