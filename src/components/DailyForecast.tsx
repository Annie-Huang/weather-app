import React from 'react';

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

interface IDailyForecastProp {
  weather_description: string;
  day_of_week: string;
  min_temperature: number;
  max_temperature: number;
  weather_icon: string;
  clouds: string;
}

const DailyForecast: React.FC<IDailyForecastProp> = (props) => (
  <div className='card text-center'>
    <h5 style={{marginBottom: 0}}>{props.day_of_week}</h5>
    <img src={props.weather_icon} alt={props.weather_description} />
    <div>{props.min_temperature}&#176;<span className='text-secondary'>{props.max_temperature}&#176;</span></div>
    <div className='text-secondary'>Clouds: {props.clouds}</div>
  </div>
);


export default DailyForecast;
