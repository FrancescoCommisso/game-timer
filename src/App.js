import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CreateGame from "./components/CreateGame";

class App extends Component {
  render() {
    return (
      <div>
        <CreateGame />
      </div>
    );
  }
}
export default App;
