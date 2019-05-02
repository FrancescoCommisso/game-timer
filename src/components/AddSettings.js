import React, { Component } from "react";

class AddSettings extends Component {
  state = {
    time: null,
    autoStart: null
  };

  onTimeChange = e => {
    this.setState({ time: e.target.value });
  };

  onAutoStartChange = e => {
    this.setState({ autoStart: e.target.checked });
  };

  render() {
    return (
      <div>
        <h2>Add Rules</h2>
        <p>How long should each turn be?</p>
        <input
          onChange={this.onTimeChange}
          name="time"
          style={{ backgroundColor: "green" }}
        />
        <label>Min</label>
        <p>Start each new turn automatically?</p>
        <input
          onChange={this.onAutoStartChange}
          name="autostart"
          type="checkbox"
          style={{ backgroundColor: "green" }}
        />
        <label>Yes/No</label>
        <div>
          <button onClick={this.handleFinish}>Finish</button>
        </div>
      </div>
    );
  }
}

export default AddSettings;
