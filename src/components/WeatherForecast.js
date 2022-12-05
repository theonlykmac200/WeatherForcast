import React from "react";
//great job using the original HTML structure from index.html

//I would challenge you to break the below up into two more components. I am sure after yesterday the bonus of additional components will be much easier.
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