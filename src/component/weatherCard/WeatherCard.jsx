import React from "react";
import "../weatherCard/WeatherCard.css";
import sun from "../icons/sun.svg";
import Day from "../day/Day";

function WeatherCard({degres}) {
console.log('ici',degres);
  return (
    <div className="weather card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">Lyon</span>
        <p>
          <img src={sun} />
        </p>
        <span className="temperature">15°</span>
        <div className="wind">Vent 1km/h (360°)</div>
      </div>

      <div className="card-action">
        <Day />
      </div>
    </div>
  );
}

export default WeatherCard;
