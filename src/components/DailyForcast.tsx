import React from 'react';
import {dayWeather} from '../model/weather.model';

const DailyForcast = (day: dayWeather) => {
  return (
    <div>
      {day.precipitation} |
      {day.humidity} |
      {day.wind} |
      {day.temperature} |
      {day.weather_description} |
      {day.min_temperature}&#176; |
      {day.max_temperature}&#176; |
      <img src={day.weather_icon} alt=""/> |
      {day.clouds} |
    </div>
  );
};

export default DailyForcast;
