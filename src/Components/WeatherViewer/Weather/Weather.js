import React from "react";
import "../../../css/weather-icons-wind.css";
import "../../../css/weather-icons.css";
import "../../../css/weather-icons-wind.min.css";
import "../../../css/weather-icons.min.css";
import "./Weather.css";
const Weather = props => (
  <div>
    <div className="upper">
      <i className="wi wi-day-sunny" />
      <div>
        <span>35</span>
        <span>Sunny</span>
      </div>
      &#176;C
    </div>
    <div className="lower">
      <i className="wi wi-raindrop" />
      <i className="wi wi-strong-wind" />
    </div>
  </div>
);

export default Weather;
