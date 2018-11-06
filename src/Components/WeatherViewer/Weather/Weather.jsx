import React from "react";
import "../../../css/weather-icons-wind.css";
import "../../../css/weather-icons.css";
import "../../../css/weather-icons-wind.min.css";
import "../../../css/weather-icons.min.css";
import "./Weather.css";
const Weather = props => (
  <div className="weather">
    <div className="upper">
      {props.weather === "haze" ? (
        <i className="wi wi-day-haze" />
      ) : props.weather === "smoke" ? (
        <i className="wi wi-smoke" />
      ) : (
        <i className="wi wi-day-fog" />
      )}

      <div>
        <span className="temprature">
          {props.temp}
          &#176;
        </span>
        <span className="climate"> {props.Weather} </span>
      </div>
      <button className="metrics" onClick={props.changeMetrics}>
        {props.metric}
      </button>
    </div>
    <div className="lower">
      <div className="wind">
        <i className="wi wi-strong-wind" />
        <span>
          {props.windspeed}
          mi/hr
        </span>
      </div>
    </div>
  </div>
);

export default Weather;
