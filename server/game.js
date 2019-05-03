class Game {
  constructor(obj) {
    this.id = obj.id;
    this.players = obj.players;
    this.gameState = {
      currentPlayer: null,
      remainingTimeForTurn: null,
      totalRuntime: 0,
      totalTurns: 0
    };
    this.gameSettings = obj.gameSettings;

    this.init = function() {
      this.gameState.currentPlayer = this.players[0];
      this.gameState.remainingTimeForTurn = this.gameSettings.time;
    };

    this.endTurn = function() {
      var current = this.players.indexOf(this.gameState.currentPlayer);
      var next = (current + 1) % 4;
      this.gameState.currentPlayer = this.players[next];
      this.gameState.totalTurns += 1;
    };
  }
}

module.exports = Game;
