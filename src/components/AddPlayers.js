import React, { Component } from "react";

class AddPlayers extends Component {
  state = {
    p1: "",
    p2: "",
    p3: "",
    p4: ""
  };

  validateRes = (status, players) => {
    if (status == 200) {
      console.log("passing " + players + "to app");
      this.props.onNext(players);
    } else {
      console.log("error: " + status);
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    var players = [];
    players.push(this.state.p1);
    players.push(this.state.p2);
    players.push(this.state.p3);
    players.push(this.state.p4);

    fetch("/api/addplayers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ players: players, id: this.props.gameID })
    }).then(res => this.validateRes(res.status, players));
  };

  handlep1change = e => {
    this.setState({ p1: e.target.value });
  };
  handlep2change = e => {
    this.setState({ p2: e.target.value });
  };
  handlep3change = e => {
    this.setState({ p3: e.target.value });
  };
  handlep4change = e => {
    this.setState({ p4: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>Add Players</h2>
        <form onSubmit={this.handleSubmit}>
          <div style={{ backgroundColor: "blue" }}>
            <input name="p1" onChange={this.handlep1change} />
          </div>
          <div style={{ backgroundColor: "blue" }}>
            <input name="p2" onChange={this.handlep2change} />
          </div>
          <div style={{ backgroundColor: "blue" }}>
            <input name="p3" onChange={this.handlep3change} />
          </div>
          <div style={{ backgroundColor: "blue" }}>
            <input name="p4" onChange={this.handlep4change} />
          </div>
          <button>Next</button>
        </form>
      </div>
    );
  }
}

export default AddPlayers;