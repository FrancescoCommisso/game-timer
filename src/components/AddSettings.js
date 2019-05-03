import React, { Component } from "react";

class AddSettings extends Component {
  state = {
    time: null,
    autoStart: false
  };

  validateRes = status => {
    if (status === 200) {
      this.props.onNext(this.state);
    } else {
      console.log("error: " + status);
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch("/api/addsettings", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: this.props.gameID, settings: this.state })
    }).then(res => this.validateRes(res.status));
  };

  onTimeChange = e => {
    this.setState({ time: e.target.value });
  };

  onAutoStartChange = e => {
    this.setState({ autoStart: e.target.checked });
  };

  render() {
    return (
      <form>
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
            <button onClick={this.handleSubmit}>Finish</button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddSettings;
