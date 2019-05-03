import React, { Component } from "react";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      currentPlayer: "fucku "
    };
  }
  setTheState = object => {
    console.log("RESOPNSE BODY: " + JSON.stringify(object));
  };

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

  render() {
    return (
      <div>
        <h1>{this.state.currentPlayer}'s Turn</h1>
        <h2>Time Remaining: </h2>
        <h4>Total Time: </h4>
        <button>Pause</button>
        <button>End Turn</button>
        <button>Restart Turn</button>
      </div>
    );
  }
}

export default Game;
