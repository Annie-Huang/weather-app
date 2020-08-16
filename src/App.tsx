import React from 'react';
import './App.css';
import useFetchWeather from "./useFetchWeather";
import {dayWeather} from './model/weather.model';
import DailyForecast from './components/DailyForecast';
import CurrentWeather from './components/CurrentWeather';

function App() {
  const city = 'melbourne';
  const units = 'M';
  const {loading, days} = useFetchWeather(city, units);

  console.log('loading=', loading);
  console.log('days=', days);

  return (
    <div className='container' style={{maxWidth: '950px'}}>
      <CurrentWeather {...days[0]} city={city} units={units}/>
      <div className='forecast-wrapper'>
        {days.map((day: dayWeather, index: number) => <DailyForecast key={index} {...day}/>)}
      </div>
    </div>
  );
}

export default App;
