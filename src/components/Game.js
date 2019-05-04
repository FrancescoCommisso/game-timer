import React, { Component } from "react";
const pretty = require("pretty-ms");

class Game extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
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
      var elapsed = Date.now() - this.state.gameState.gameStartTime;
      this.setState({ totalTime: pretty(elapsed) });

      this.getRemainingTime();
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleEndTurn = () => {
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

  getRemainingTime = () => {
    fetch("/api/remainingtime", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: this.props.gameID })
    })
      .then(response => response.json())
      .then(state => this.setState({ gameState: state }));
  };

  handlePause = () => {
    fetch("/api/input/pause", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: this.props.gameID })
    }).then(response => response.json());
  };

  handleRestart = () => {
    fetch("/api/input/restart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: this.props.gameID })
    });
  };

  determinePaused = () => {
    if (this.state.gameState.paused) {
      return "Un-Pause";
    } else {
      return "Pause";
    }
  };

  render() {
    if (this.state) {
      return (
        <div>
          <h1>{this.state.id}</h1>
          <h2>{this.state.gameState.currentPlayer}'s Turn</h2>
          <h3>
            Time Remaining: {pretty(this.state.gameState.remainingTimeForTurn)}{" "}
          </h3>
          <h5>Total Time: {this.state.totalTime}</h5>
          <h5>Turn#: {this.state.gameState.totalTurns}</h5>
          <button onClick={this.handlePause}>{this.determinePaused()}</button>
          <button onClick={this.handleEndTurn}>End Turn</button>
          <button onClick={this.handleRestart}>Restart Turn</button>
          <button>Settings</button>
        </div>
      );
    } else {
      return <div>shouldnt be seeing this</div>;
    }
  }
}

export default Game;
