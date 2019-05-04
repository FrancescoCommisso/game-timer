import React, { Component } from "react";

class FindGame extends Component {
  state = {
    id: null
  };

  handleIDChange = e => {
    this.setState({ id: e.target.value.trim() });
  };
  handleJoinGame = () => {
    fetch("/api/game", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: this.state.id })
    })
      .then(response => response.json())
      .then(state => this.setState(state));
    this.props.handleFindGame(this.state);
  };
  render() {
    return (
      <div>
        <h1>Find Game</h1>
        <p>
          If one of your friend's has already created a game, enter the Game-ID
          here
        </p>
        <input onChange={this.handleIDChange} placeholder="XXXXX" />
        <button onClick={this.handleJoinGame}>Join Game</button>
      </div>
    );
  }
}

export default FindGame;
