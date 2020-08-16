import React from 'react';
import './CurrentWeather.css';
import {WEATHER_UNIT_MAPPER} from '../constant/weather.constant';

const CurrentWeather = (today: any) => {
  // @ts-ignore
  const unit = WEATHER_UNIT_MAPPER[today.units].shortName;

  return (
    <div className='wrapper'>
      <div className='summary text-center text-sm-left'>
        <h1 className="text-capitalize">{today.city}</h1>
        <div className="font-weight-bold text-secondary">
          Tuesday, April 15th <br/>
          {today.weather_description}
        </div>
      </div>
      <section className='left-column'>
        <img src={today.weather_icon} alt={today.weather_description} />
        <div className='hero'>{today.temperature} &#176;{unit}</div>
      </section>
      <section className='right-column text-center text-sm-left'>
        <div><span className='text-secondary'>Precipitation:</span> {today.precipitation}</div>
        <div><span className='text-secondary'>Humidity:</span> {today.humidity}</div>
        <div><span className='text-secondary'>Wind:</span> {today.wind}</div>
        <div><span className='text-secondary'>Clouds:</span> {today.clouds}</div>
      </section>
    </div>
    );
};

export default CurrentWeather;
