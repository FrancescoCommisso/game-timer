import React, { Component } from "react";
const pretty = require("pretty-ms");

class Game extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(this.props.gameID);
    fetch("/api/game", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: this.props.gameID })
    })
      .then(response => response.json())
      .then(state => this.setState(state));
    this.calcTotalTime();
  }

  calcTotalTime = () => {
    this.interval = setInterval(() => {
      var elapsed = Date.now() - this.state.gameState.startTime;
      this.setState({ totalTime: pretty(elapsed) });
    }, 1000);
  };

  //   calcRemainingTime = () => {

  //   };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick = () => {
    fetch("/api/input/endturn", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: this.props.gameID })
    })
      .then(response => response.json())
      .then(state => this.setState(state));
  };

  render() {
    if (this.state) {
      return (
        <div>
          <h1>{this.state.id}</h1>
          <h2>{this.state.gameState.currentPlayer}'s Turn</h2>
          <h3>Time Remaining: {this.state.gameState.remainingTimeForTurn} </h3>
          <h5>Total Time: {this.state.totalTime}</h5>
          <h5>Turn#: {this.state.gameState.totalTurns}</h5>
          <button>Pause</button>
          <button onClick={this.handleClick}>End Turn</button>
          <button>Restart Turn</button>
          <button>Settings</button>
        </div>
      );
    } else {
      return <div>shouldnt be seeing this</div>;
    }
  }
}

export default Game;
