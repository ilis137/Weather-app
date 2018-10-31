import React, { Component } from "react";
import WeatherViewer from "./Components/WeatherViewer/WeatherViewer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherViewer />
      </div>
    );
  }
}

export default App;
