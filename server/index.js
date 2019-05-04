const Game = require("./game.js");
const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(pino);

app.use(express.static(path.join(__dirname, "../client/build")));

//production mode
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client/build")));
//   //
//   app.get("*", (req, res) => {
//     res.sendfile(path.join((__dirname = "client/build/index.html")));
//   });
// }

var games = {};

app.post("/api/addgame", (req, res) => {
  var g = new Game(req.body);
  g.init();
  games[g.id] = g;
  res.send();
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

app.listen(5000, () =>
  console.log("Express server is running on localhost:5000")
);
