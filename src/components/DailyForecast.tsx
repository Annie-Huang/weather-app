import React from 'react';
import {dayWeather} from '../model/weather.model';

/*  <div>
    {day.precipitation} |
    {day.humidity} |
    {day.wind} |
    {day.temperature} |
    {day.weather_description} |
    {day.min_temperature}&#176; |
    {day.max_temperature}&#176; |
    <img src={day.weather_icon} alt=""/> |
    {day.clouds} |
  </div>*/

const DailyForecast = (day: dayWeather) => (
  <div className='card text-center'>
    <h5 style={{marginBottom: 0}}>{day.day_of_week}</h5>
    <img src={day.weather_icon} alt={day.weather_description} />
    <div>{day.min_temperature}&#176;<span className='text-secondary'>{day.max_temperature}&#176;</span></div>
    <div className='text-secondary'>Clouds: {day.clouds}</div>
  </div>
);


export default DailyForecast;
