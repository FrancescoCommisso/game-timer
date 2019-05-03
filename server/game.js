class Game {
  constructor() {
    this.id = this.generateID();
    this.players = [];
    this.gameState = {
      currentPlayer: null,
      remainingTimeForTurn: null,
      totalRuntime: 0,
      totalTurns: 0
    };
    this.gameSettings = {
      time: null,
      autostart: false
    };
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
