import React, { Component } from "react";
import WeatherViewer from "./Components/WeatherViewer/WeatherViewer.jsx";
import "./App.css";
import Axios from "axios";
let pos = {};
class App extends Component {
  state = {
    data: null,
    longitude: null,
    latitude: null,
    weather: null,
    icon: null,
    temprature: 0,
    metric: "C"
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      pos = this.cloneObject(position);
      console.log("component did mount");
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
      console.log(position.coords.latitude, position.coords.longitude);
      Axios.get(
        "https://fcc-weather-api.glitch.me/api/current?lat=" +
          pos.coords.latitude +
          "&lon=" +
          pos.coords.longitude
      ).then(res => {
        console.log(res);

        this.setState({
          temprature: res.data.main.temp.toFixed(0),
          place: res.data.name,
          weather: res.data.weather[0].main,
          icon: res.data.weather[0].icon,
          windspeed: res.data.wind.speed
        });
      });
    });
  }

  metricChangeHandler = () => {
    let newTemp;
    if (this.state.metric === "C") {
      newTemp = (this.state.temprature * 1.8 + 32).toFixed(0);
    } else {
      newTemp = ((this.state.temprature - 32) / 1.8).toFixed(0);
    }
    this.setState(prevState => {
      return prevState.metric === "C"
        ? { metric: "F", temprature: newTemp }
        : { metric: "C", temprature: newTemp };
    });
  };
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
    console.log(this.state.metric);
    return (
      <div className="App">
        <WeatherViewer
          temp={this.state.temprature}
          place={this.state.place}
          Weather={this.state.weather}
          windspeed={this.state.windspeed}
          icon={this.state.icon}
          changeMetrics={this.metricChangeHandler}
          metric={this.state.metric}
        />
      </div>
    );
  }
}

export default App;
