import React from "react";
import "../weatherCard/WeatherCard.css";
import Day from "../day/Day";

function WeatherCard({degres, city,speed,icon,handleClickDay}) {

  return (
    <div className="weather card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">{city}</span>
        <p>
          <img src={icon} />
        </p>
        <span className="temperature">{degres}</span>
        <div className="wind">Vent {speed}km/h (360°)</div>
      </div>

      <div className="card-action">
     
        <Day handleClickDay={handleClickDay} />
      </div>
    </div>
  );
}

export default WeatherCard;
