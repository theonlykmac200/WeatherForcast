import React from "react";

const WeatherForecast = ({img, conditions, time}) => {
    return (
        <div className="weather-icons">
        <img src={img} alt="weather icon" />
        <p><span>Conditions:</span>{conditions}</p>
        <p><span>Time:</span>{time}</p>
        </div>
    );
    }

export default WeatherForecast;