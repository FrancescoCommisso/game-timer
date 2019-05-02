class Game {
  constructor() {
    this.id = this.generateID();
    this.players = [];
    this.gameState = {
      currentPlayer: null,
      remainingTimeForTurn: null,
      totalRuntime: null,
      totalTurns: null
    };
  }

  setID(id) {
    this.id = id;
  }
  getID() {
    return this.id;
  }

  getPlayers() {
    return this.players;
  }
  setPlayers(players) {
    this.players = players;
  }
  getGameState() {
    return this.gameState;
  }
  setGameState(gameState) {
    this.gameState = gameState;
  }

  generateID() {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}

module.exports = Game;
