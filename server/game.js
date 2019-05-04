class Game {
  constructor(obj) {
    this.id = obj.id;
    this.players = obj.players;
    this.gameState = {
      currentPlayer: null,
      remainingTimeForTurn: null,
      gameStartTime: null,
      totalTurns: 0,
      currentPlayerStartTime: null
    };
    this.gameSettings = obj.gameSettings;

    this.init = function() {
      this.gameState.currentPlayer = this.players[0];
      this.gameSettings.time *= 60000;
      this.gameState.remainingTimeForTurn = this.gameSettings.time;
      this.gameState.gameStartTime = Date.now();
      this.gameState.totalTurns = 1;
      this.calculateTimeRemaining();
    };

    var intervalID;

    this.endTurn = function() {
      var current = this.players.indexOf(this.gameState.currentPlayer);
      var next = (current + 1) % 4;
      this.gameState.currentPlayer = this.players[next];
      this.gameState.totalTurns += 1;
      this.gameState.remainingTimeForTurn = this.gameSettings.time;
    };

    this.calculateTimeRemaining = () => {
      intervalID = setInterval(() => {
        this.gameState.remainingTimeForTurn -= 1000;
        if (this.gameState.remainingTimeForTurn < 0) this.endTurn();
      }, 1000);
    };

    this.pauseTurn = () => {
      if (intervalID) {
        clearInterval(intervalID);
        intervalID = null;
      } else {
        this.calculateTimeRemaining();
      }
    };

    this.restartTurn = () => {
      this.gameState.remainingTimeForTurn = this.gameSettings.time;
    };

    // this.editSettings() = function(){

    // }
  }
}

module.exports = Game;
