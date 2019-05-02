import React, { Component } from "react";

class CreateGame extends Component {
  state = {};

  componentDidMount() {
    fetch("/api/creategame")
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  validateRes = status => {
    if (status == 200) {
      console.log("about to send");
      this.props.onCreate(this.state.id);
    } else {
      console.log(status);
    }
  };

  createGame = () => {
    console.log("sending: " + JSON.stringify(this.state));
    fetch("/api/addgame", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(res => this.validateRes(res.status));
  };

  render() {
    return (
      <div>
        <h2>Create Game</h2>
        <p>Here is your Game-ID</p>
        <h1>{this.state.id}</h1>
        <p>Others can use it to access this game session from their device!</p>

        <button onClick={this.createGame}>Create</button>
      </div>
    );
  }
}

export default CreateGame;
