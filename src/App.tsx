import React, {useState} from 'react';
import './App.css';
import useFetchWeather from "./useFetchWeather";
import {dayWeather} from './model/weather.model';
import DailyForecast from './components/DailyForecast';
import CurrentWeather from './components/CurrentWeather';
import SearchWeather from './components/SearchWeather';

const App: React.FC = () => {
  const [city, setCity] = useState('melbourne');
  const [units, setUnits] = useState('M');
  const {loading, days} = useFetchWeather(city, units);

  // console.log('loading=', loading);
  // console.log('days=', days);

  return (
    <div className='container' style={{maxWidth: '950px'}}>
      <SearchWeather city={city} setCity={setCity} units={units} setUnits={setUnits}/>
      <CurrentWeather {...days[0]} city={city} units={units}/>
      <div className='forecast-wrapper'>
        {days.map((day: dayWeather, index: number) => <DailyForecast key={index} {...day}/>)}
      </div>
    </div>
  );
}

export default App;
