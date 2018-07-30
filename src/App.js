import React, { Component } from "react";
import "./App.css";
import data from "./data.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Dashboard</h1>
        {data.Environments.map(env => {
          return (
            <div className="env">
              <h2>Environment: {env.name}</h2>
              <h2>Duration: {env.uptimeDuration}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
