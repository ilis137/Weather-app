import React, { Component } from "react";
import WeatherViewer from "./Components/WeatherViewer/WeatherViewer";
import "./App.css";
import Axios from "axios";
let pos = {};
class App extends Component {
  state = {
    data: null,
    longitude: null,
    latitude: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      //console.log(Position);
      pos = this.cloneObject(position);
      console.log(pos);
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
      console.log(pos);
      Axios.get(
        "https://fcc-weather-api.glitch.me/api/current?lat=" +
          pos.coords.latitude +
          "&lon=" +
          pos.coords.longitude
      ).then(res => {
        console.log(res);
        this.setState({
          temprature: res.data.main.temp
        });
      });
    });
  }

  cloneObject = obj => {
    var clone = {};
    for (var i in obj) {
      if (obj[i] != null && typeof obj[i] == "object")
        clone[i] = this.cloneObject(obj[i]);
      else clone[i] = obj[i];
    }
    return clone;
  };
  render() {
    // console.log(this.state.latitude, this.state.longitude);
    return (
      <div className="App">
        <WeatherViewer temp={this.state.temprature} />
      </div>
    );
  }
}

export default App;
