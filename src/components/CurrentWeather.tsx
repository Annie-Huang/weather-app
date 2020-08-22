import React from 'react';
import './CurrentWeather.css';
import {WEATHER_UNIT_NAME_MAPPER} from '../constant/weather.constant';
import {getCalendarMonth, getWeekDay} from '../untils/weather.utils';


interface ICurrentWeatherProp {
  precipitation: string,
  humidity: string,
  wind: string,
  temperature: number,
  weather_description: string,
  weather_icon: string,
  clouds: string,

  city: string,
  units: string,
}

const CurrentWeather: React.FC<ICurrentWeatherProp> = (props) => {
  const unit = WEATHER_UNIT_NAME_MAPPER.find(item => item.id === props.units)?.shortName;
  const dateOfToday = new Date();

  return (
    <div className='current-weather-wrap'>
      <div className='summary text-center text-sm-left'>
        <h1 className="text-capitalize">{props.city}</h1>
        <div className="font-weight-bold text-secondary">
          {getWeekDay(dateOfToday)}, {getCalendarMonth(dateOfToday)} {dateOfToday.getDate()} <br/>
          {props.weather_description}
        </div>
      </div>
      <section className='left-column'>
        <img src={props.weather_icon} alt={props.weather_description} />
        <div className='hero'>{props.temperature} <span className='text-secondary'>&#176;{unit}</span></div>
      </section>
      <section className='right-column text-center text-sm-left'>
        <div><span className='text-secondary'>Precipitation:</span> {props.precipitation}</div>
        <div><span className='text-secondary'>Humidity:</span> {props.humidity}</div>
        <div><span className='text-secondary'>Wind:</span> {props.wind}</div>
        <div><span className='text-secondary'>Clouds:</span> {props.clouds}</div>
      </section>
    </div>
    );
};

export default CurrentWeather;
