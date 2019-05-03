import React, { Component } from "react";

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
          <h1>{this.state.gameState.currentPlayer}'s Turn</h1>
          <h2>Time Remaining: {this.state.gameState.remainingTimeForTurn} </h2>
          <h4>Total Time: {this.state.gameState.totalRuntime}</h4>
          <h4>Turn#: {this.state.gameState.totalTurns}</h4>
          <button>Pause</button>
          <button onClick={this.handleClick}>End Turn</button>
          <button>Restart Turn</button>
          <button>Settings</button>
        </div>
      );
    } else return <div>No state here </div>;
  }
}

export default Game;
