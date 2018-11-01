import React from "react";
import Weather from "./Weather/Weather";
import "./WeatherViewer.css";
const WeatherViewer = props => {
  return (
    <div className="WeatherViewer">
      <div className="location">
        {props.location}
        Mumbai
      </div>
      <Weather temp={props.temp} />
    </div>
  );
};

export default WeatherViewer;
