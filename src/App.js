import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CreateGame from "./components/CreateGame";
import AddPlayers from "./components/AddPlayers";
import AddSettings from "./components/AddSettings";
import Game from "./components/Game";

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      players: null,
      settings: null
    };
  }

  handleOnCreate = id => {
    console.log("id: " + id);
    this.setState({ id: id });
  };

  handleNext = players => {
    this.setState({ players: players });
  };

  handleFinish = settings => {
    this.setState({ settings: settings });
  };

  render() {
    if (this.state.id === null) {
      return (
        <div>
          <CreateGame onCreate={this.handleOnCreate} gameID={this.state.id} />
        </div>
      );
    }
    if (this.state.players === null) {
      return (
        <div>
          <AddPlayers onNext={this.handleNext} gameID={this.state.id} />
        </div>
      );
    }
    if (this.state.settings === null) {
      return (
        <div>
          <AddSettings onNext={this.handleFinish} gameID={this.state.id} />
        </div>
      );
    }

    return (
      <div>
        <Game gameID={this.state.id} />
      </div>
    );
  }
}
export default App;
