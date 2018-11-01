import React from "react";
import "../../../css/weather-icons-wind.css";
import "../../../css/weather-icons.css";
import "../../../css/weather-icons-wind.min.css";
import "../../../css/weather-icons.min.css";
import "./Weather.css";
const Weather = props => (
  <div className="weather">
    <div className="upper">
      <i className="wi wi-day-sunny" />
      <div>
        <span className="temprature">
          {props.temp}
          &#176;
        </span>
        <span className="climate"> Sunny </span>
      </div>
      <span className="metrics"> C </span>
    </div>
    <div className="lower">
      <i className="wi wi-raindrop" />
      <i className="wi wi-strong-wind" />
    </div>
  </div>
);

export default Weather;
