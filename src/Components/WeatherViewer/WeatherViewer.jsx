import React from "react";
import Weather from "./Weather/Weather.jsx";
import "./WeatherViewer.css";
const WeatherViewer = props => {
  return (
    <div className="WeatherViewer">
      <div className="location">{props.place}</div>
      <Weather
        temp={props.temp}
        Weather={props.Weather}
        windspeed={props.windspeed}
        icon={props.icon}
        changeMetrics={props.changeMetrics}
        metric={props.metric}
      />
    </div>
  );
};

export default WeatherViewer;
