import React from "react";
import Weather from "./Weather/Weather";
import "./WeatherViewer.css";
const WeatherViewer = props => {
  return (
    <div className="WeatherViewer">
      <div>
        {props.location}
        Mumbai
      </div>
      <Weather />
    </div>
  );
};

export default WeatherViewer;
