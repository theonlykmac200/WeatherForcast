import React from "react";
import "./styles.css";
import weatherArray from "./weatherData";
import WeatherForecast from "./components/WeatherForecast"

const weather = weatherArray.map((weather, index) => {
  return (
    <WeatherForecast
      key={index}
      {...weather}
    />
  ); 
});
console.log(weather)
export default function App() {
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <div className="weather">
        {weather}
      </div>
    </div>
  );
}
